'use strict';

var HDWalletProvider = require("truffle-hdwallet-provider")

module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      network_id: '*'
    },

    rinkeby: {
      provider: () => new HDWalletProvider(
        process.env.HDWALLET_MNEMONIC,
        process.env.INFURA_PROVIDER_URL,
        0, // we start with address[0]
        8 // notice that we unlock eight: which will be address[0] and address[1]
      ),
      network_id: '*',
      gas: 6700000,
      gasPrice: 10 * 1000000000
    }
  },

  compilers: {
    solc: {
      version: "0.5.0",
    }
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 1
    }
  },

  mocha: {
    reporter: 'eth-gas-reporter',
    reporterOptions : {
      currency: 'USD',
      gasPrice: 10
    }
  }
};
