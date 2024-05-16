![zksync-logo_upscaled](https://github.com/Oladayo-Ahmod/escrow-contract/assets/57647734/2d905a0b-4434-4763-979b-ad06a14435d1)

# A Step-by-Step Guide to Building a Decentralized Escrow System on zkSync.

This article will delve into the intricate step-by-step process of building a decentralized escrow system that empowers users with secure, 
transparent, and efficient transactions on zkSync, a cutting-edge layer 2 scaling solution for Ethereum.

## Table of Contents:
-  [Introduction](#introduction)
-  [Prerequisites](#prerequisites)
-  [Environment Setup](#environment-setup)
-  [Understanding the Code Structure](#snderstanding-the-code)
   - [Project structure](#project-structure)
-  [Writing the Escrow Contract](#writing-the-escrow-contract)
   - [Register Purchaser](#register-purchaser)
   - [Register Vendor](#register-vendor)
   - [Create Agreement](#create-agreement)
   - [Enter Agreement](#enter-agreement)
   - [Deposit Funds](#deposit-funds)
   - [Release Payment](#release-payment)
   - [Refund Payment](#refund-payment)
-  [Complete Code](#complete-Code)
-  [Compiling Smart Contract](#compiling-smart-contract)
-  [Writing Tests](#writing-tests)
-  [Deploying Smart Contract](#deploying-smart-contract)
-  [Conclusion](#conclusion)

## Introduction

zkSync is a layer 2 scaling solution for Ethereum. It is designed not only to increase the transaction throughput of the Ethereum network by reducing transaction costs and latency but also to fully preserve its foundational values – freedom, self-sovereignty, and decentralization. It employs zero-knowledge proofs to achieve scalability and privacy. One of the greatest features of zkSync is hyperscalability which ensures that as transactional demands escalate, the system seamlessly accommodates them without compromising its robust security measures or incurring additional costs.

## Prerequisites

* Basic understanding of Solidity.
* Visual studio code (VS code) or remix ide.
* Faucet: Follow this guide to obtain zkSync faucet.
* Node js is installed on your machine.

## Environment Setup

zkSync provides easy ways to get started with setting your environment by providing great plugins on Hardhat and Foundry. You can get started by using use one of the two. However, for this tutorial, we will be using hardhat.

Run the below command inside your terminal to create the project with the necessary dependencies.

```bash
npx zksync-cli create demo --template hardhat_solidity
```
You will be prompted to enter your private key for the project. Enter your private or skip to set it later.
![escrow-2](https://github.com/Oladayo-Ahmod/escrow-contract/assets/57647734/58d79069-be52-45e0-b9c1-dfe89229494e)


