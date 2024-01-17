import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deployer: ${deployer.address} (${ethers.utils.formatEther(await deployer.getBalance())} ETH)`);

  const recipients = [
    // TEST
    "0x402247276D976e03BD6c43Ce4621b5Cb559a78Be",
    "0x046FBf7a5d946000a7Bd3945769caA9D54B41b91",
  ];
  const amounts = [
    // TEST
    BigInt("100000000000000000000"),
    BigInt("200000000000000000000"),
  ];

  const airdropAddress = "0xB1dC3400225BDD07AF8c841942b7b8909514641E";
  const airdropFactory = await ethers.getContractFactory("AirDrop");
  const aidrop = airdropFactory.attach(airdropAddress);

  const airdropTx = await aidrop.sendBatch(recipients, amounts);
  await airdropTx.wait();

  console.log(`Airdrop completed`);
}

main()
  .then(() => {
    console.log("Deployment completed successfully!");
  })
  .catch((error) => {
    console.error(error);
    throw new Error(error);
  });