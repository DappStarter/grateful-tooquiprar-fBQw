require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow fringe skull guard render remind mistake hunt merry fog tide'; 
let testAccounts = [
"0xbe5ea5a644f48a76790152fb702fe1d1cf2962ce0201f4b374e1ff8e08f18292",
"0x6bc83bb5b2bbb69af7b5bd1ce96e2c973f0e8084c1f637ba9c95bc09d3d6cb4f",
"0x3ccd4063bf4c2d7c34bafb1f1d95fc6c8c45fb1f027575824e9b0dc6cdea3f5c",
"0xe820d4b61ed9724ddc212cc065a150e61b3d6ca66c40f0aa6d0bf02f6a51dbcf",
"0x7092b671e8a4cb6f08c0b8b0f959a4ce9bad6c21de78b0ef9f23850bff18b04c",
"0x1f5e0d95cca1772504cd55b3009b636f78626406b363d6e39838bbb97568663a",
"0x0817e9df305f1088b64d925fdaca33f0a6b5215b23fe88e6217fac214aed6905",
"0x15ab47684dee5ab4eef7bfed54486c427a54dc6c54e80f4994f52dff176032bc",
"0xfe46905b6b82794bbcca1277a6bfc7497cf567f85053ff445f74c8db37a408e6",
"0x6daf7064bf79c47e4c954e83ab9907f3db2937e54afd21b36a693c24aeffe1b7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

