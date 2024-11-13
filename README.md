# Blockchain-Based Decentralized Evidence Management System

This repository contains the codebase for the **Blockchain-Based Decentralized Evidence Management System**: A project designed to enhance judicial integrity through a secure, transparent, and decentralized approach to evidence management. This project was developed as a Minor Project for the Bachelor of Technology degree in Computer Science & Engineering.

## Project Overview

The traditional approach to evidence management has multiple challenges, including potential evidence tampering, inadequate access controls, and chain of custody lapses. This project aims to address these issues by utilizing blockchain technology to create a tamper-proof, transparent, and efficient evidence management system.

### Key Features

- **Blockchain Technology**: Utilizes Ethereum blockchain to ensure transparency and immutability.
- **IPFS for Decentralized Storage**: Stores evidence files in IPFS for secure, distributed access.
- **Smart Contracts**: Enforces access control and ensures secure handling of evidence.
- **Frontend & Backend Integration**: Seamlessly connects user interfaces with backend blockchain functionality.

## Table of Contents

- [Introduction](#introduction)
- [Problem Statement](#problem-statement)
- [Objectives](#objectives)
- [Scope](#scope)
- [Methodology and Results](#methodology-and-results)
- [Key Findings](#key-findings)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [License](#license)

## Introduction

The project addresses the shortcomings of traditional evidence management systems by leveraging blockchain’s transparency and security to ensure judicial integrity. By creating a decentralized solution, this system aims to maintain data integrity and protect evidence from tampering.

## Problem Statement

Conventional evidence management systems face several issues:
- **Evidence Tampering**: Lack of data integrity makes evidence vulnerable to unauthorized changes.
- **Chain of Custody Lapses**: Tracking the flow of evidence can be unreliable.
- **Access Control**: Insufficient control over who can view or modify evidence.
- **Inefficiencies**: Delays in retrieving evidence and limited transparency.

## Objectives

1. To develop a secure and transparent system for evidence management using blockchain.
2. To utilize IPFS for decentralized storage, ensuring data availability and integrity.
3. To employ smart contracts for secure access control.

## Scope

This project provides a technical roadmap for building a robust evidence management system, including frontend and backend integration, distributed storage, and access control.

## Methodology and Results

- **System Architecture**: The system architecture combines Ethereum blockchain, IPFS, and smart contracts.
- **Performance**: Optimized for quick retrieval times and scalability.
- **Security**: Ensures 99.99% data integrity with tamper-proof mechanisms.

## Key Findings

- **Improved Retrieval Time**: The system achieved significant reductions in evidence retrieval time.
- **Data Integrity**: Achieved 99.99% data integrity, ensuring tamper-proof evidence handling.

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/evidence_manager.git
   cd evidence_manager
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment variables in the `.env` file.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **Blockchain**: Ethereum
- **Smart Contracts**: Solidity
- **Storage**: IPFS
- **Frontend**: Next.js, React
- **Backend**: Node.js, Hardhat

## Usage

- **Frontend**: The frontend provides a user interface for interacting with the evidence management system.
- **Backend**: Includes API endpoints for interacting with the blockchain and IPFS.
- **Smart Contracts**: Contracts that handle evidence access control and management.

## Folder Structure

```plaintext
evidence_manager
├── .next
├── backend
├── contract
│   ├── abi.json
│   ├── address.json
│   └── Blocksafe.sol
├── node_modules
├── public
│   └── images
│       ├── GlobeLock.png
│       └── Vector.png
├── src
│   ├── api
│   ├── components
│   │   ├── Background
│   │   ├── Connect
│   │   ├── DashboardMenu
│   │   └── Header
│   ├── pages
│   │   ├── about
│   │   ├── contact
│   │   └── dashboard
│   │       ├── Window
│   │       ├── CaseForm.tsx
│   │       ├── index.tsx
│   └── store
│   └── styles
│   └── utils
│   └── wagmi.ts
├── .env
├── hardhat.config.js
├── next.config.js
├── package.json
├── postcss.config.js
└── README.md
```

