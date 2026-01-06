import EthereumProvider from "@walletconnect/ethereum-provider";
import { ethers } from "ethers";

const PROJECT_ID = "Your PROJECT ID";
const SEPOLIA = 11155111;

let provider;
let ethersProvider;
let signer;

export async function connectWallet() {
  provider = await EthereumProvider.init({
    projectId: PROJECT_ID,
    chains: [SEPOLIA],
    showQrModal: false
  });

  await provider.connect();

  ethersProvider = new ethers.providers.Web3Provider(provider);
  signer = ethersProvider.getSigner();

  const address = await signer.getAddress();
  const balance = await ethersProvider.getBalance(address);

  return {
    address,
    balance: ethers.utils.formatEther(balance)
  };
}

export async function sendTx(to, amount) {
  const tx = {
    to,
    value: ethers.utils.parseEther(amount)
  };

  const resp = await signer.sendTransaction(tx);

  // 回传 Android
  if (window.Android?.onTxHash) {
    window.Android.onTxHash(resp.hash);
  }

  return resp.hash;
}
