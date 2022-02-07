require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gesture brand tail tooth blanket crater remind huge good clog swift tourist'; 
let testAccounts = [
"0x9df754f22b7bfd8d6f853a9c0419e6b4cc761bb796afa60c626381176ee4306d",
"0x470973830309df63359fe8ddb3a38c1bfabaa3dbf4c3f6a8e69011fed3ec9e55",
"0xd4f7e96d3bc23e59ffadd73e40ad19883e47fef99213049c8992fc335361764b",
"0x32de0276650221007e4f87ae8908cc7ae5b1b42f028de2985204edfcf4de9f21",
"0x48efe2eb9772928553435fc05fca88613d5f603c28abf639baa5e38da756e524",
"0xa9226809535e291dcb350b0413ce5b73ecd8c6cca8812679ec935e5f50d63cd2",
"0xabd641058cbe16c54a810faf1319891d9efa57d30e59a6a37708c47fc440b25b",
"0x465393b73dbea5f872165ca889d400adcb23a4e0a48ef08ec3c1ba67c91d88ef",
"0x21f356a38857c64a82bd20f00bffc326d9346d15811f349a2eaac913807718a2",
"0x043de9b21d24e3ae1c87d041e01c6a29244f185414dc293a2f4da963baef3718"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


