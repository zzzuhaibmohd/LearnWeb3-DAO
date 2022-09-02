const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
//const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = "0x091376324956087a3376004E2a2d05e8640472D7";//WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = "https://nft-collection-sneh1999.vercel.app/api/";//METADATA_URL;
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory("CryptoDevs");

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  // print the address of the deployed contract
  console.log(
    "Crypto Devs Contract Address:",
    deployedCryptoDevsContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });