/* eslint-disable no-console */

import { ethers } from "hardhat";
import { DEPLOYER } from "../setup/trigger";

const main = async () => {
  // Make sure the current signer is the canonical deployer
  const [deployer] = await ethers.getSigners();
  if (deployer.address.toLowerCase() !== DEPLOYER.toLowerCase()) {
    throw new Error("Wrong deployer");
  }

  // x1-testnet test-nft
  // const nftAddr = "0xf1b4f863c5982b6e6def8a80e07649c4f643f37a";
  // const nftAddr = "0xc872f3b2c56a234ca90e44a55c8fd270dc0d2ea2";
  // zkfair mainnet
  const nftAddr = "0x12fda829b9248548c5ec40b006524e50b52bb043";
  const nft = await ethers.getContractAt("ReservoirErc721", nftAddr);
  console.log(`==deployer ${deployer.address} mint on nft: ${nftAddr}`);

  // 每次mint，这里+1
  const tokenId = 1;
  const result = await nft.mint(tokenId);
  console.log(`mint result: ${JSON.stringify(result, null, 3)}`);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
