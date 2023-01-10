const main = async () => {
  // @ts-ignore
  const SourceGreeting = await hre.ethers.getContractFactory('SourceGreeting');
  const sourceGreetingContract = await SourceGreeting.deploy(
    '0x0C70d6E9760DEE639aC761f3564a190220DF5E44'
  );
  await sourceGreetingContract.deployed();
  console.log('Contract deployed to:', sourceGreetingContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
