import EthereumProvider from "@walletconnect/ethereum-provider";
import { BrowserProvider, formatEther, parseEther } from "ethers";

/**
 * Sepolia
 */
const SEPOLIA_CHAIN_ID_DEC = 11155111;
const SEPOLIA_CHAIN_ID_HEX = "0xaa36a7";

/**
 * WalletConnect Project ID
 */
const PROJECT_ID = "Your PROJECT ID"; // use your PROJECT_ID

const logEl = document.getElementById("log");
function log(msg) {
  logEl.textContent += msg + "\n";
  console.log(msg);
}

function getReturnUrl() {
  const p = new URLSearchParams(location.search);
  return p.get("returnUrl") || "myapp://wc";
}

function backToApp(params) {
  const returnUrl = getReturnUrl();
  const u = new URL(returnUrl);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== null) {
      u.searchParams.set(k, String(v));
    }
  });
  location.href = u.toString();
}

let wcProvider = null;
let web3 = null;
let signer = null;

/**
 * initial WalletConnect Provider
 */
async function initProvider() {
  if (wcProvider) return wcProvider;

  wcProvider = await EthereumProvider.init({
    projectId: PROJECT_ID,
    chains: [SEPOLIA_CHAIN_ID_DEC],
    showQrModal: true,
    metadata: {
      name: "Android DApp (Sepolia)",
      description: "WalletConnect v2 + Sepolia",
      url: "Your URL", //use your url
      icons: ["https://walletconnect.com/walletconnect-logo.png"],
    },
  });

  wcProvider.on("chainChanged", (c) => log("chainChanged: " + c));
  wcProvider.on("accountsChanged", (a) =>
    log("accountsChanged: " + JSON.stringify(a))
  );
  wcProvider.on("disconnect", () => log("disconnect"));

  return wcProvider;
}

/**
 * Ensure on the Sepolia chain
 */
async function ensureSepolia(provider) {
  const chainId = await provider.request({ method: "eth_chainId" });
  log("current chainId = " + chainId);

  if (chainId !== SEPOLIA_CHAIN_ID_HEX) {
    log("Switching to Sepolia...");
    await provider.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: SEPOLIA_CHAIN_ID_HEX }],
    });
  }
}

/**
 * Connect wallet
 */
async function connectWallet() {
  log("Connecting wallet...");

  const provider = await initProvider();

  // ⚠️ The "connect" operation might be "completed silently" in version 2, .
  await provider.connect();
  log("Connect request sent");

  // ✅ Mandatory inspection and chain cutting
  await ensureSepolia(provider);

  // ✅ The new ethers provider must be created after cutting the chain.
  web3 = new BrowserProvider(provider);
  signer = await web3.getSigner();

  const address = await signer.getAddress();
  const balanceWei = await web3.getBalance(address);
  const balanceEth = formatEther(balanceWei);

  document.getElementById("account").innerText =
    "Address: " + address;
  document.getElementById("balance").innerText =
    "Balance: " + balanceEth + " ETH";

  log("Connected: " + address);
  log("Balance: " + balanceEth + " ETH");

  backToApp({
    event: "connected",
    status: "ok",
    address,
    balance: balanceEth,
    chainId: SEPOLIA_CHAIN_ID_HEX,
  });
}

/**
 * Send transaction
 */
async function sendTx(to, amountEth) {
  if (!signer) throw new Error("Not connected");

  log("Sending tx...");

  const tx = await signer.sendTransaction({
    to,
    value: parseEther(amountEth),
  });

  log("Tx hash: " + tx.hash);

  backToApp({
    event: "tx",
    status: "ok",
    txHash: tx.hash,
  });
}

/**
 * UI Binding
 */
window.addEventListener("DOMContentLoaded", () => {
  log("DApp loaded. returnUrl=" + getReturnUrl());

  document.getElementById("connect").onclick = async () => {
    try {
      await connectWallet();
    } catch (e) {
      console.error(e);
      log("Connect error: " + (e?.message || e));
      backToApp({
        event: "connected",
        status: "fail",
        reason: e?.message || String(e),
      });
    }
  };

  document.getElementById("send").onclick = async () => {
    try {
      const to = document.getElementById("to").value.trim();
      const amount = document.getElementById("amount").value.trim();

      if (!to.startsWith("0x")) throw new Error("Invalid address");
      if (!amount) throw new Error("Amount required");

      await sendTx(to, amount);
    } catch (e) {
      console.error(e);
      log("Send error: " + (e?.message || e));
      backToApp({
        event: "tx",
        status: "fail",
        reason: e?.message || String(e),
      });
    }
  };
});
