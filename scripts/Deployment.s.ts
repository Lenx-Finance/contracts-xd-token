import "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log(`Deployer: ${deployer.address} (${ethers.utils.formatEther(await deployer.getBalance())} ETH)`);

  const maxSupply = BigInt("100000000000000000000000000");
  const initialSupply = BigInt("64000000000000000000000000");
  const emissionRate = BigInt("652315720800000000");

  const xdTokenFactory = await ethers.getContractFactory("XDToken");
  const lenxVestingMultisig = "0xc8Cb3345A5d0889d5408F795Ee52B6ea8f7f0144";
  const xdToken = await xdTokenFactory.deploy(maxSupply, initialSupply, emissionRate, lenxVestingMultisig);
  await xdToken.deployed();
  console.log(`XDToken deployed to: ${xdToken.address}`);

  const lenxControllerMultisig = "0x41Ed9F2740400f83107c41F5d7EE62eb1DE73596";
  await xdToken.transferOwnership(lenxControllerMultisig);
  console.log("XDToken owner set to: ", lenxControllerMultisig);
}

main()
  .then(() => {
    console.log("Deployment completed successfully!");
  })
  .catch((error) => {
    console.error(error);
    throw new Error(error);
  });