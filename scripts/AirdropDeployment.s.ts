import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deployer: ${deployer.address} (${ethers.utils.formatEther(await deployer.getBalance())} ETH)`);

  const airdropFactory = await ethers.getContractFactory("AirDrop");
  const xdToken = "0x3005003BDA885deE7c74182e5FE336e9E3Df87bB";
  const airdrop = await airdropFactory.deploy(xdToken);
  await airdrop.deployed();
  console.log(`Airdrop deployed to: ${airdrop.address}`);
}

main()
  .then(() => {
    console.log("Deployment completed successfully!");
  })
  .catch((error) => {
    console.error(error);
    throw new Error(error);
  });