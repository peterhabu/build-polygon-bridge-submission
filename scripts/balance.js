const { ethers } = require("ethers");

// Establish connection parameters
const provider = new ethers.providers.JsonRpcProvider('https://matic-mumbai.chainstacklabs.com');
const NFT_CONTRACT_ADDRESS = "0x549A3D41C0626ea686F8F208DE58761D8Dc61361";
const QUERY_ADDRESS = "0x72e7Fd82d7b6497833f0c46ea3d30f3D35276714";

async function getNFTContractInstance() {
  const signer = await getPrimarySigner();
  const NFTContract = await ethers.getContractFactory("PartyNFT", signer);
  return NFTContract.attach(NFT_CONTRACT_ADDRESS);
}

async function getPrimarySigner() {
  const accounts = await ethers.getSigners();
  return accounts[0]; // Assuming the first account is the primary
}

async function queryNFTBalance(nftInstance, address) {
  const balance = await nftInstance.balanceOf(address);
  console.log(`\nBalance of ${address} on Polygon Mumbai:`, balance.toString());
}

async function execute() {
  try {
    const nftInstance = await getNFTContractInstance();
    await queryNFTBalance(nftInstance, QUERY_ADDRESS);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

execute();
