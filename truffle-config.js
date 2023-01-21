const HDWalletProvider = require('./app/node_modules/truffle-hdwallet-provider');

require('./app/node_modules/dotenv').config();

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*",

    goerli: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`),
        network_id: 5,
        gas: 4500000,
        gasPrice: 10000000000
    }
  },

  compilers: {
    solc: {
      version: "0.5.16"
    }
  }
}
