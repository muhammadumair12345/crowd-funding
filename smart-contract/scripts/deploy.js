const hre = require("hardhat");

async function main() {
  const CrowdFunding = await hre.ethers.getContractFactory("CrowdFunding");
  const crowdFunding = await CrowdFunding.deploy();

  await crowdFunding.waitForDeployment();

  console.log("CrowdFunding deployed to: ", crowdFunding.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
