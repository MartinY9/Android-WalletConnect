const logEl = document.getElementById("log");
const log = (m) => (logEl.textContent += m + "\n");

/**
 * WalletConnect Project ID
 */
const PROJECT_ID = "Your Project ID";

/**
 * Sepolia
 */
const SEPOLIA_CHAIN_ID = 11155111;

/**
 * 连接钱包（Wallet-led）
 * 只负责：拉起钱包
 */
window.connectWallet = function () {
  log("Opening wallet...");

  // 钱包完成交易后回调的 deeplink
  const redirect = encodeURIComponent("myapp://wc");

  const wcUrl =
    "wc:" +
    "?projectId=" + PROJECT_ID +
    "&relay-protocol=irn" +
    "&chainId=eip155:" + SEPOLIA_CHAIN_ID +
    "&redirect=" + redirect;

  // 🚀 拉起钱包（Trust / MetaMask / OKX）
  window.location.href = wcUrl;
};

/**
 * Send 按钮：在 Wallet-led 模式下
 * 不再由 H5 发交易
 */
window.sendTx = function () {
  log("Transaction will be confirmed inside wallet");
  log("Please continue in your wallet app");
};

/**
 * 主动返回 App
 */
window.returnToApp = function () {
  window.location.href = "myapp://wc";
};
