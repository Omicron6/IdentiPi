IdentiPI is a decentralized identity wallet that enables document-free verification using zero knowledge (zk)proofs, allowing users to share only what’s required while keeping their personal data private.
🧩 Problem
Today’s identity verification systems are:
Repetitive (users upload the same documents everywhere)
Privacy-invasive (full IDs are shared for simple checks)
Centralized (single points of failure and data breaches)
Inefficient (manual checks, mismatches, delays)
Users are forced to reveal more data than necessary just to prove simple facts like age eligibility or credential ownership.
💡 Solution
IdentiPI introduces a privacy-first identity verification flow where:
Users own and control their identity
Verifiers receive proofs, not documents
Sensitive data is never directly shared
Using decentralized identity concepts and Zero-Knowledge Proofs, IdentiPI allows users to prove claims (e.g., “I am over 18”) without revealing personal details such as date of birth or ID numbers.
🔑 Key Features
Decentralized Identity (DID)
Users create and manage a self-owned digital identity.
Selective Disclosure
Share only what is required for verification—nothing more.
Zero-Knowledge Proofs (ZKPs)
Prove facts like age eligibility without exposing underlying data.
QR-Based Verification Flow
Simple scan → user approval → cryptographic proof → verification.
Privacy-First by Design
No raw documents stored or transmitted during verification.
🏗️ Architecture Overview
Frontend: User identity wallet & verifier interface
ZK Layer: Circom + SnarkJS for proof generation & verification
Identity Layer: Decentralized Identifiers (DIDs) & Verifiable Credentials (VCs)
Privacy Layer: Designed to align with Midnight-style private verification (simulated for MVP)
⚠️ Note: Midnight smart contract execution is currently simulated, as the network is not publicly deployable yet. The verification logic mirrors how private verification would work once available.
🧪 MVP Scope
This repository focuses on:
A working identity & verification flow
Real Zero-Knowledge proof generation
Clear separation between identity, proof, and verification
Product clarity over protocol depth
Future work includes deeper on-chain integration, broader credential types, and production-grade deployments.
🌍 Why It Matters
IdentiPI demonstrates how Web3 can:
Reduce unnecessary data exposure
Improve trust in verification processes
Give users control over their identity
Enable privacy-preserving digital systems at scale
📌 Status
🛠️ Hackathon / Prototype Stage
Actively evolving and open to refinement, collaboration, and feedback.
