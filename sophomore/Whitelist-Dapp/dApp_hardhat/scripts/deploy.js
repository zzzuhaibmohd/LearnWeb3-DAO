async function main() {

  const whitelistContract = await ethers.getContractFactory("Whitelist");

  // here we deploy the contract with 10 whitelisted address
  const deployedWhitelistContract = await whitelistContract.deploy(10);
  
  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Whitelist Contract Address:",
    deployedWhitelistContract.address
  );
}
// npx hardhat run scripts/deploy.js --network goerli   
// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });