require("@nomicfoundation/hardhat-ethers");
require("@nomicfoundation/hardhat-verify");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: false,
        runs: 200,
      },
      evmVersion: "paris",
    },
  },
  networks: {
    bsc: {
      type: "http",
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: {
      bsc: "2I6U3P1S2P4X6D29Y6H2P4C2Z1B4I2N1Q2" // Placeholder or actual if you have one.
    }
  }
};