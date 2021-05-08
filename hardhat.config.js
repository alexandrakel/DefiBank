require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const fs = require('fs');
const mnemonic = fs.readFileSync(".secrets.json").toString().trim();
// const BSC_URL = process.env.BSC_URL

const bscscanApiKey = fs.readFileSync('.hidden.json').toString().trim();

module.exports = {
  networks: {
    hardhat: {
    },
    testnet: {
      // url: BSC_URL,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: {mnemonic: mnemonic}
    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  },
  etherscan: {
    // Your API key for Etherscan
    // apiKey: "ISA4SN5VPEDAUDEUCZP9V9HC8WGXR7VD5H" // rinkeby && etherscan
    apiKey: bscscanApiKey // bscscan
    // apiKey: process.env.BSCSCANAPIKEY // bscscan
  },
};
