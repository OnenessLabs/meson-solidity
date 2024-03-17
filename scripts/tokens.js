
async function main(){
   //usdX on arb 0x431bD39D454ac48957fE384A61afA68A5F4dff59
//    hre.changeNetwork("arb-goerli")
   // usdX on one
   hre.changeNetwork("one")

    const accounts = await ethers.getSigners()
    const admin = accounts[0]
    console.log(`admin : ${admin.address}`)

    const mesonAddress = '0x244Bb9e8D1d1b2B73182D594B87691eD8708105e'
    const name = "USDX"
    const symbol = "USDX"
    const decimals = 6
    console.log(`Deploying token ${name}...`)
    const totalSupply = ethers.utils.parseUnits('100000000', decimals)
    const args = [name, symbol, totalSupply.toString(), decimals]
    const factory = await ethers.getContractFactory('MockToken', admin)
    const instance = await factory.deploy(...args)
    await instance.deployed()
    console.log(`${name} deployed to:`, instance.address)

    // add support token
    const meson = await ethers.getContractAt('Meson', mesonAddress)
    await meson.addSupportToken(instance.address, 5)
    console.log('addSupport usdX to Meson')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
  })
  