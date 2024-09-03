"use client"

import React, { useState } from 'react';
import { ethers } from 'ethers';
import EscrowABI from '../app/abi/Escrow.json';
import { connectWallet, signer } from '../app/utils/ethers';

const Escrow = () => {
  const [contract, setContract] = useState(null);
  const [status, setStatus] = useState('');
  const [agreementId, setAgreementId] = useState('');
  const [agreementDetails, setAgreementDetails] = useState({
    title: '',
    description: '',
    amount: '',
  });

  const contractAddress = '0x0aF12F802184df021D51c5DE5c7c592005a0c3CF';

  const initializeContract = async () => {
    await connectWallet();
    const escrowContract = new ethers.Contract(contractAddress, EscrowABI, signer);
    setContract(escrowContract);
    setStatus('Contract initialized!');
  };

  const handleInputChange = (e) => {
    setAgreementDetails({ ...agreementDetails, [e.target.name]: e.target.value });
  };

  const registerPurchaser = async () => {
    try {
      const tx = await contract.registerPurchaser();
      await tx.wait();
      setStatus('Purchaser registered!');
    } catch (err) {
      console.error(err);
      setStatus('Error registering purchaser');
    }
  };

  const registerVendor = async () => {
    try {
      const tx = await contract.registerVendor();
      await tx.wait();
      setStatus('Vendor registered!');
    } catch (err) {
      console.error(err);
      setStatus('Error registering vendor');
    }
  };

  const createAgreement = async () => {
    try {
      const { title, description, amount } = agreementDetails;
      const tx = await contract.createAgreement(title, description, ethers.parseEther(amount));
      await tx.wait();
      setStatus('Agreement created!');
    } catch (err) {
      console.error(err);
      setStatus('Error creating agreement');
    }
  };

  const enterAgreement = async () => {
    try {
      const tx = await contract.enterAgreement(agreementId);
      await tx.wait();
      setStatus('Entered into agreement!');
    } catch (err) {
      console.error(err);
      setStatus('Error entering agreement');
    }
  };

  const depositFunds = async () => {
    try {
      const tx = await contract.depositFunds(agreementId, {
        value: ethers.parseEther(agreementDetails.amount),
      });
      await tx.wait();
      setStatus('Funds deposited!');
    } catch (err) {
      console.error(err);
      setStatus('Error depositing funds');
    }
  };

  const releasePayment = async () => {
    try {
      const tx = await contract.releasePayment(agreementId);
      await tx.wait();
      setStatus('Payment released!');
    } catch (err) {
      console.error(err);
      setStatus('Error releasing payment');
    }
  };

  const refundPayment = async () => {
    try {
      const tx = await contract.refundPayment(agreementId);
      await tx.wait();
      setStatus('Payment refunded!');
    } catch (err) {
      console.error(err);
      setStatus('Error refunding payment');
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4">Escrow DApp</h1>
      <button className="btn btn-primary" onClick={initializeContract}>
        Connect to Contract
      </button>
      <p>{status}</p>

      <button className="btn btn-success mt-3" onClick={registerPurchaser}>
        Register as Purchaser
      </button>

      <button className="btn btn-info mt-3" onClick={registerVendor}>
        Register as Vendor
      </button>

      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          name="title"
          value={agreementDetails.title}
          onChange={handleInputChange}
        />
        <textarea
          className="form-control mt-2"
          placeholder="Description"
          name="description"
          value={agreementDetails.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Amount (ETH)"
          name="amount"
          value={agreementDetails.amount}
          onChange={handleInputChange}
        />
        <button className="btn btn-warning mt-3" onClick={createAgreement}>
          Create Agreement
        </button>
      </div>

      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Agreement ID"
          value={agreementId}
          onChange={(e) => setAgreementId(e.target.value)}
        />
        <button className="btn btn-secondary mt-2" onClick={enterAgreement}>
          Enter Agreement
        </button>
      </div>

      <button className="btn btn-danger mt-3" onClick={depositFunds}>
        Deposit Funds
      </button>

      <button className="btn btn-success mt-3" onClick={releasePayment}>
        Release Payment
      </button>

      <button className="btn btn-dark mt-3" onClick={refundPayment}>
        Refund Payment
      </button>
    </div>
  );
};

export default Escrow;
