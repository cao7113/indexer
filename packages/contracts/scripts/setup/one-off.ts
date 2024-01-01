/* eslint-disable no-console */

import { ethers } from "hardhat";

import { DEPLOYER, readDeployment, trigger } from "./trigger";
import {add} from "@reservoir0x/indexer/dist/sync/events/data/caviar-v1";

const main = async () => {
  const chainId = await ethers.provider.getNetwork().then((n) => n.chainId);

  // Make sure the current signer is the canonical deployer
  // const [deployer] = await ethers.getSigners();
  // if (deployer.address.toLowerCase() !== DEPLOYER.toLowerCase()) {
  //   throw new Error("Wrong deployer");
  // }
  //
  // chainId;
  // trigger;
    const address = await trigger.Modules.AlienswapModule(chainId);
    console.log("AlienswapModule Address: ", address)
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
