import { config, deployments, ethers, network } from "hardhat"
import { SourceToken, SourceToken__factory } from "../types"

const fs = require("fs")
const recipientsFile = "./scripts/recipients.json"
const transferPath = "./transfers_SOURCE/"

async function main(): Promise<void> {
  if (!fs.existsSync(recipientsFile)) {
    throw Error("recipients file not found")
  }
  if (!fs.existsSync(transferPath)) {
    fs.mkdirSync(transferPath)
  }
  if (!fs.existsSync(transferPath + network.name)) {
    fs.mkdirSync(transferPath + network.name)
  }
  let recipients = fs.readFileSync(recipientsFile).toString()
  recipients = JSON.parse(recipients)

  let transferFile = transferPath + network.name + `/${recipients.name}.json`
  if (fs.existsSync(transferFile)) {
    throw Error("transfer file with name already exists")
  }

  const sourceTokenAddress = (await deployments.getOrNull("SourceToken"))?.address
  console.log(sourceTokenAddress)

  if (!sourceTokenAddress) throw new Error("token not deployed on this network")

  const signer = (await ethers.getSigners())[0]

  const sourceContract = new ethers.Contract(
    sourceTokenAddress,
    SourceToken__factory.createInterface(),
    signer,
  ) as SourceToken

  const addresses = recipients.recipients
  let transfers = {}
  try {
    for (let recipient of addresses) {
      const address = recipient.address
      const amount = ethers.utils.parseEther(recipient.amount)
      const schedules = formatLock(recipient.schedules)

      console.log("💵 Sending " + ethers.utils.formatEther(amount) + " locked SOURCE to " + address)

      const tx = await (
        await sourceContract.transferWithLock(address, {
          totalAmount: amount,
          amountStaked: 0,
          schedules: schedules,
        })
      ).wait()

      transfers[recipient.address] = {
        name: recipient.name,
        amount: recipient.amount,
        schedules: recipient.schedules,
        txHash: tx.transactionHash,
      }
      fs.writeFileSync(transferFile, JSON.stringify(transfers, null, 2))
    }
  } catch (e) {
    console.log(e)
  }
  console.log("funds transfered")
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error)
    process.exit(1)
  })

const formatLock = (lockSchedule) => {
  return lockSchedule.map((schedule) => {
    return {
      amount: ethers.utils.parseEther(schedule.amount),
      expirationBlock: Date.parse(schedule.expirationDateTime) / 1000,
    }
  })
}
