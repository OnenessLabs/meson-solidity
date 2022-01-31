import { waffle } from 'hardhat'
import { MesonClient, SignedSwapRequest, SignedSwapRelease } from '@mesonfi/sdk'
import { MockToken, MesonPoolsTest } from '@mesonfi/contract-typs'

import { expect } from './shared/expect'
import { initiator, provider } from './shared/wallet'
import { fixtures, TOKEN_BALANCE, TOKEN_TOTAL_SUPPLY } from './shared/fixtures'
import { getDefaultSwap } from './shared/meson'

describe('MesonPools', () => {
  let token: MockToken
  let unsupportedToken: MockToken
  let mesonInstance: MesonPoolsTest
  let outChain: string
  let userClient: MesonClient
  let lpClient: MesonClient

  beforeEach('deploy MesonPoolsTest', async () => {
    const result = await waffle.loadFixture(() => fixtures([
      initiator.address, provider.address
    ]))
    token = result.token1.connect(provider)
    unsupportedToken = result.token2.connect(provider)
    mesonInstance = result.pools.connect(provider) // provider is signer

    outChain = await mesonInstance.getCoinType()
    userClient = await MesonClient.Create(result.pools) // user is default account
    lpClient = await MesonClient.Create(mesonInstance)
    await token.approve(mesonInstance.address, 1000)
  })

  describe('#token total supply', () => {
    it(`is ${TOKEN_TOTAL_SUPPLY}`, async () => {
      expect(await token.totalSupply()).to.equal(TOKEN_TOTAL_SUPPLY)
    })
  })

  describe('#token balance for an account', () => {
    it(`is ${TOKEN_BALANCE}`, async () => {
      expect(await token.balanceOf(initiator.address)).to.equal(TOKEN_BALANCE)
      expect(await token.balanceOf(provider.address)).to.equal(TOKEN_BALANCE)
    })
  })

  describe('#token balance', () => {
    it('is zero', async () => {
      expect(await token.balanceOf(mesonInstance.address)).to.equal(0)
    })
  })

  describe('#depositAndRegister', () => {
    it('accepts 1000 deposit', async () => {
      await mesonInstance.depositAndRegister(token.address, 1000, 1)
      expect(await mesonInstance.balanceOf(token.address, provider.address)).to.equal(1000)
      expect(await token.balanceOf(mesonInstance.address)).to.equal(1000)
      expect(await token.balanceOf(provider.address)).to.equal(TOKEN_BALANCE.sub(1000))

      await expect(mesonInstance.deposit(token.address, 1)).to.be.reverted
    })

    it('refuses unsupported token', async () => {
      await unsupportedToken.approve(mesonInstance.address, 1000)
      await expect(mesonInstance.depositAndRegister(unsupportedToken.address, 1000, 1))
        .to.be.revertedWith('unsupported token')
    })
  })

  describe('#withdraw', () => {
    it('accepts 1000 deposit and 1000 withdrawal', async () => {
      await mesonInstance.depositAndRegister(token.address, 1000, 1)
      await mesonInstance.withdraw(token.address, 1000)
      expect(await token.balanceOf(mesonInstance.address)).to.equal(0)
      expect(await token.balanceOf(provider.address)).to.equal(TOKEN_BALANCE)

      await expect(mesonInstance.withdraw(token.address, 1)).to.be.reverted
    })

    it('refuses unsupported token', async () => {
      await expect(mesonInstance.withdraw(unsupportedToken.address, 1000)).to.be.revertedWith('unsupported token')
    })
  })

  describe('#lock', async () => {
    it('lockes a swap', async () => {
      await mesonInstance.depositAndRegister(token.address, 1000, 1)

      const swap = userClient.requestSwap(outChain, getDefaultSwap({ outToken: 0 }))
      const exported = await swap.exportRequest(initiator)

      const signedRequest = new SignedSwapRequest(exported)
      signedRequest.checkSignature()
      await lpClient.lock(signedRequest)

      expect(await mesonInstance.balanceOf(token.address, initiator.address)).to.equal(0)
      expect(await mesonInstance.hasLockedSwap(swap.swapId)).to.equal(true)
    })
  })

  describe('#release', async () => {
    it('accepts a release', async () => {
      await mesonInstance.depositAndRegister(token.address, 1000, 1)

      const swapData = getDefaultSwap({ outToken: 0 })
      const swap = userClient.requestSwap(outChain, swapData)
      const exported = await swap.exportRequest(initiator)
      
      const signedRequest = new SignedSwapRequest(exported)
      signedRequest.checkSignature()
      await lpClient.lock(signedRequest)

      const exportedRelease = await swap.exportRelease(initiator, swapData.recipient)
      const signedRelease = new SignedSwapRelease(exportedRelease)
      signedRelease.checkSignature()
      await lpClient.release(signedRelease)

      expect(await mesonInstance.balanceOf(token.address, initiator.address)).to.equal(0)
      expect(await token.balanceOf(swapData.recipient)).to.equal(swap.amount)
    })
  })
})
