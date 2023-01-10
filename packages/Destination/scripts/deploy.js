(async () => {
  // @ts-ignore
  const DestinationGreeting = await hre.ethers.getContractFactory(
    'DestinationGreeting'
  );
  const destinationGreetingContract = await DestinationGreeting.deploy();
  await destinationGreetingContract.deployed();
  console.log(
    'DestinationGreeting Contract deployed to:',
    destinationGreetingContract.address
  );

  // @ts-ignore
  hre.run('verify:verify', {
    address: destinationGreetingContract.address,
    constructorArguments: [],
  });
})()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
