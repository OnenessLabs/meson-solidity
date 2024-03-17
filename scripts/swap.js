const {
   MesonClient,
   EthersWalletSwapSigner,
   SignedSwapRequest,
   SignedSwapRelease,
} = require('@mesonfi/sdk')
const { adaptors } = require('@mesonfi/sdk')
const { getClient } = require('./lib/getClient')
const { getPartialSwap, getSwap } = require('../test/shared/meson')
const { Wallet } = require('ethers')
const { Meson } = require('@mesonfi/contract-abis')

const mesonAddress = "0x244bb9e8d1d1b2b73182d594b87691ed8708105e"
const outChain = '0x1234'

require('dotenv').config()

const {
  PRIVATE_KEY,
  PREMIUM_MANAGER,
  LP_PRIVATE_KEY,
  TRUSTED_PRIVATE_KEY,
} = process.env

let mesonInstance;
let initiatorWallet, mesonClientForInitiator;
let swap;
let signedRequestData, signedRequest, signedReleaseData,signedRelease;

async function sign(network){
   const client = getClient(network)
   initiatorWallet = new Wallet(PRIVATE_KEY, client)
   
   mesonInstance = adaptors.getContract(mesonAddress, Meson.abi, initiatorWallet)

   const swapSigner = new EthersWalletSwapSigner(initiatorWallet)
   mesonClientForInitiator = await MesonClient.Create(mesonInstance, swapSigner)
   swap = mesonClientForInitiator.requestSwap(getPartialSwap(), outChain)

   signedRequestData = await swap.signForRequest(true)
   signedRequest = new SignedSwapRequest(signedRequestData)
   signedRequest.checkSignature()
   console.log('signed Reuqest', signedRequest)

   signedReleaseData = await swap.signForRelease(initiatorWallet.address, true)
   signedRelease = new SignedSwapRelease(signedReleaseData)
   signedRelease.checkSignature()
   console.log('signed Release', signedRelease)
}
async function userExecute(){
   const tx= await mesonClientForInitiator.directExecuteSwap(signedRequestData)
   console.log(tx)
}

// execute on target chain
async function executeRelease(){
   await hre.changeNetwork('arb')

   const client = getClient('arb')
   const trustedWallet = new Wallet(TRUSTED_PRIVATE_KEY, client)

   const mesonInstance2 = adaptors.getContract(mesonAddress, Meson.abi, trustedWallet)
   const swapSigner = new EthersWalletSwapSigner(trustedWallet)
   const mesonClient = await MesonClient.Create(mesonInstance2, swapSigner)
   const tx = await mesonClient.directRelease(signedReleaseData)
   console.log('release tx', await tx.wait())
}

// execute on source chain by lp
async function lpExecute(){
   await hre.changeNetwork('one')

   const client = getClient('one')
   const lpWallet = new Wallet(LP_PRIVATE_KEY, client)

   const mesonInstance3 = adaptors.getContract(mesonAddress, Meson.abi, lpWallet)
   const swapSigner = new EthersWalletSwapSigner(lpWallet)
   const mesonClient = await MesonClient.Create(mesonInstance3, swapSigner)
   const tx = await mesonClient.executeSwap(signedReleaseData, true)
   console.log('lp execute swap', await tx.wait())
}

module.exports = async function swap(network){
   // hre.changeNetwork("arb-goerli")
   // hre.changeNetwork("one")

    await sign(network)
   //  await userExecute()
   //  await executeRelease()
   //  await lpExecute()
}