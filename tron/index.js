const TronWeb = require('tronweb');
const tronWeb = new TronWeb({
  fullHost: 'https://api.trongrid.io',
});

async function generateTRXWallet() {
  const account = tronWeb.createAccount();
  return {
    address: account.address,
    privateKey: account.privateKey
  };
}

module.exports = generateTRXWallet;
