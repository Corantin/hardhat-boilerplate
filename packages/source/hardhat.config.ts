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
      goerli: process.env.ETHERSCAN_API_KEY,
    },
  },
  networks: {
    hardhat: {} as HardhatNetworkConfig,
    goerli: {
      chainId: 5,
      url: 'https://rpc.ankr.com/eth_goerli',
      // PRIVATE_KEY loaded from .env file
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    } as unknown as HardhatNetworkConfig,
  } as unknown as NetworksConfig,
};
