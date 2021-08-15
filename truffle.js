const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "";
//
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      websockets: true,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
    }
  }
};