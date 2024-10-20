require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const SECRET_KEY = process.env.SECRET_KEY;
const infuraProjectId = process.env.INFURA_PROJECT_ID;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider(SECRET_KEY, `https://mainnet.infura.io/v3/${infuraProjectId}`),
      network_id: 11155111, // Sepolia's network ID
      gas: 5500000, // Gas limit
      confirmations: 10, // Confirmations to wait between deployments
      timeoutBlocks: 200, // Blocks before deployment times out
      skipDryRun: true, // Skip dry run before migrations
      pollingInterval: 8000,
      networkCheckTimeoutnetworkCheckTimeout: 10000,
      gasLimit: 7500000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",  // Use specific solc version
    },
  },
}
