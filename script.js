document.addEventListener('DOMContentLoaded', () => {
  const walletModal = document.getElementById('walletModal');
  const walletTrigger = document.getElementById('walletTrigger');
  const closeModal = document.querySelector('.close');
  const metamaskBtn = document.querySelector('.wallet-btn');
  
  // Show modal
  walletTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    walletModal.classList.remove('hidden');
  });

  // Close modal
  closeModal.addEventListener('click', () => {
    walletModal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === walletModal) {
      walletModal.classList.add('hidden');
    }
  });

  // Connect MetaMask
  metamaskBtn.addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const accounts = await provider.send("eth_requestAccounts", []);
        const address = accounts[0];
        
        alert(`Wallet connected:\n${address}`);
        walletModal.classList.add('hidden');

        // OPTIONAL: display wallet in nav
        walletTrigger.innerText = `${address.slice(0, 6)}...${address.slice(-4)}`;
      } catch (err) {
        console.error("Connection error:", err);
        alert("Connection failed. Check MetaMask.");
      }
    } else {
      alert("MetaMask not detected. Please install MetaMask.");
    }
  });
});
