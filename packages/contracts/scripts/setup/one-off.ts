/* eslint-disable no-console */

import { ethers } from "hardhat";

import { DEPLOYER, readDeployment, trigger } from "./trigger";

const main = async () => {
  const chainId = await ethers.provider.getNetwork().then((n) => n.chainId);

  // // Make sure the current signer is the canonical deployer
  // const [deployer] = await ethers.getSigners();
  // if (deployer.address.toLowerCase() !== DEPLOYER.toLowerCase()) {
  //   throw new Error("Wrong deployer");
  // }
  //
  // chainId;
  // trigger;

    // 部署 router
    const address = await trigger.Modules.AlienswapModule(chainId);
    console.log("xxxxx", address)
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
