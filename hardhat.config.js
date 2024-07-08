require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    // Keep the existing networks if you want, or remove them if you don't need them
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/PfihUnn4SOIFdAQwkTI_bTQW4bj2dWeX',
      accounts: ["Private Key"],
    },
   // goerli: {
    //  url: "https://ethereum-goerli.publicnode.com",
     // accounts: [process.env.PRIVATE_KEY],
    //},
    // Add Sepolia network configuration
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/adWMnDUcqmiSGSOzzSmo1fCkonljKqHr', // You'll need to set this in your .env file
      accounts: ["Private Key"],
    },
  },
};
