import { HardhatNetworkConfig, NetworksConfig } from 'hardhat/types/config';

require('@nomicfoundation/hardhat-toolbox');
require('@openzeppelin/hardhat-upgrades');
// Any file that has require('dotenv').config() statement
// will automatically load any variables in the root's .env file.
require('dotenv').config();

export default {
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {},
      },
    ],
    overrides: {},
  },
  etherscan: {
    apiKey: {
      optimisticGoerli: process.env.ETHERSCAN_API_KEY,
    },
  },
  networks: {
    hardhat: {} as HardhatNetworkConfig,
    // for testnet
    'optimism-goerli': {
      url: 'https://goerli.optimism.io',
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  } as unknown as NetworksConfig,
};
