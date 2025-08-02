document.addEventListener("DOMContentLoaded", () => {
  const connectMetaMaskBtn = document.getElementById("connectMetaMask");
  const walletInfo = document.getElementById("walletInfo");
  const userAddress = document.getElementById("userAddress");
  const ethBalance = document.getElementById("ethBalance");
  const usdValue = document.getElementById("usdValue");

  // Load ethers.js
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js";
  document.head.appendChild(script);

  connectMetaMaskBtn.addEventListener("click", async () => {
    if (typeof window.ethereum === "undefined") {
      alert("MetaMask is not installed. Please install it first.");
      return;
    }

    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const balance = await provider.getBalance(address);
      const ethValue = ethers.utils.formatEther(balance);

      userAddress.textContent = address;
      ethBalance.textContent = `${ethValue} ETH`;

      // USD conversion (static example, you’d normally fetch live price)
      const ethToUsdRate = 3000; // placeholder example
      usdValue.textContent = `$${(parseFloat(ethValue) * ethToUsdRate).toFixed(2)}`;

      walletInfo.classList.remove("hidden");
    } catch (error) {
      console.error(error);
      alert("Failed to connect MetaMask.");
    }
  });
});
