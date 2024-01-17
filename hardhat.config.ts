import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "dotenv/config";
import "hardhat-contract-sizer";

export default {
  solidity: {
    compilers: [
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.10",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    eth: {
      allowUnlimitedContractSize: true,
      url: "https://rpc.ankr.com/eth/",
      chainId: 1,
      accounts: [process.env.TESTNET_KEY],
      gas: "auto",
      gasPrice: "auto",
    },
    zeta_testnet: {
      allowUnlimitedContractSize: true,
      url: "https://rpc.ankr.com/zetachain_evm_athens_testnet",
      chainId: 7001,
      accounts: [process.env.TESTNET_KEY],
      gas: "auto",
      gasPrice: "auto",
      runs: 0,
    },
  },
  mocha: {
    timeout: 400000000,
  },
};
