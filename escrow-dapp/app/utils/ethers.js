import { ethers } from 'ethers';

let provider;
let signer;

export const connectWallet = async () => {
  if (window.ethereum) {
    provider = new ethers.BrowserProvider(window.ethereum);
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    signer = await provider.getSigner();
  } else {
    console.error('MetaMask is not installed!');
  }
};

export { provider, signer };