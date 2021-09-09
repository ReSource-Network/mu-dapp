import { ethers, getNamedAccounts } from "hardhat"
import { UnderwriteManager } from "../types/UnderwriteManager"
import { UnderwriteManager__factory } from "../../react-app/src/contracts/factories/UnderwriteManager__factory"
import { MutualityToken__factory } from "../../react-app/src/contracts/factories/MutualityToken__factory"
import { MutualityToken } from "../../react-app/src/contracts/MutualityToken"
import { parseEther } from "ethers/lib/utils"
import { readFileSync } from "fs"
import { NetworkRegistry__factory } from "../../react-app/src/contracts/factories/NetworkRegistry__factory"
import { NetworkRegistry } from "../../react-app/src/contracts/NetworkRegistry"
const fs = require("fs")

const underwriteAbi = "./deployments/localhost/UnderwriteManager_Proxy.json"
const mutualityAbi = "./deployments/localhost/MutualityToken_Proxy.json"
const rUSDAbi = "./deployments/localhost/RUSD_Proxy.json"
const networkRegistryAbi = "./deployments/localhost/NetworkRegistry_Proxy.json"

// Add your business's multiSig address
const members = [
  "0x7fB7a463A9817C88aF7F223242968Ce882A0D7fD",
  "0x9620C68f4B0CE33A32dEeEc22C9DDe28a7EFda6f", // nate local
]
// Add your underwriter address
const underwriters = [
  "0x7A900e4b37D5635Ccec6Ab8751f5Feb652b6bc8d", // bridger
  "0xa7b9b3E61a5d3063510C54C9a6561A193c6a4a06", // nate
]

async function issueCreditLine() {
  try {
    let underwriteContract = fs.readFileSync(underwriteAbi).toString()
    underwriteContract = JSON.parse(underwriteContract)
    const underwriteAddress = underwriteContract.address

    let mutualityContract = fs.readFileSync(mutualityAbi).toString()
    mutualityContract = JSON.parse(mutualityContract)
    const mutualityAddress = mutualityContract.address

    let rUSDContract = fs.readFileSync(rUSDAbi).toString()
    rUSDContract = JSON.parse(rUSDContract)
    const rUSDAddress = rUSDContract.address

    let networkRegistryContract = fs.readFileSync(networkRegistryAbi).toString()
    networkRegistryContract = JSON.parse(networkRegistryContract)
    const networkRegistryAddress = networkRegistryContract.address

    const deployer = (await ethers.getSigners())[0]

    const underwriteManager = UnderwriteManager__factory.getContract(
      underwriteAddress,
      UnderwriteManager__factory.createInterface(),
      deployer,
    ) as UnderwriteManager

    const mutualityToken = MutualityToken__factory.getContract(
      mutualityAddress,
      MutualityToken__factory.createInterface(),
      deployer,
    ) as MutualityToken

    const networkRegistry = NetworkRegistry__factory.getContract(
      networkRegistryAddress,
      NetworkRegistry__factory.createInterface(),
      deployer,
    ) as NetworkRegistry
    const curMembers = await networkRegistry.getMembers()
    for (var member of members) {
      if (!curMembers.includes(member))
        await (await networkRegistry.connect(deployer).addMember(member)).wait
    }
    for (var underwriter of underwriters)
      if (Number(ethers.utils.formatEther(await mutualityToken.balanceOf(underwriter))) < 1000)
        await mutualityToken
          .connect(deployer)
          .transfer(underwriter, ethers.utils.parseEther("1000.0"))

    // TODO: create test business
  } catch (e) {
    console.log(e)
  }
}

async function main() {
  await issueCreditLine()
  console.log("✅ Local Environment Provisioned.")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
