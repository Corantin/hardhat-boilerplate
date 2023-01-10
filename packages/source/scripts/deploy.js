(async () => {
  // @ts-ignore
  const SourceGreeting = await hre.ethers.getContractFactory('SourceGreeting');
  const constructorArguments = ['0xFCa08024A6D4bCc87275b1E4A1E22B71fAD7f649']; // Connext address
  const sourceGreetingContract = await SourceGreeting.deploy(
    ...constructorArguments
  );
  await sourceGreetingContract.deployed();
  console.log(
    'SourceGreeting Contract deployed to:',
    sourceGreetingContract.address
  );

  console.log('Waiting 10 seconds for contract to be published...');
  setTimeout(() => {
    // @ts-ignore
    await hre.run('verify:verify', {
      address: sourceGreetingContract.address,
      constructorArguments: constructorArguments,
    });
  }, 10000);
})()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
