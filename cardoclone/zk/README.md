# IdentiPI ZK Proof System

This folder contains the real Zero-Knowledge circuit for proving "Age ≥ 18"
using Circom and SnarkJS.

## Steps to run:

### 1. Compile the circuit:
```bash
circom circuits/age18.circom --r1cs --wasm --sym -o build/
```

### 2. Download or generate the powers of tau:
```bash
snarkjs powersoftau new bn128 12 pot12_0000.ptau
snarkjs powersoftau contribute pot12_0000.ptau pot12_final.ptau
```

### 3. Generate proving & verification keys:
```bash
snarkjs groth16 setup build/age18.r1cs pot12_final.ptau build/age18_0001.zkey
snarkjs zkey export verificationkey build/age18_0001.zkey build/verification_key.json
```

### 4. Generate proof:
```bash
node scripts/proveAge.js
```

### 5. Verify proof:
```bash
node scripts/verifyProof.js
```

## Deployment:

- Copy `age18.wasm` and `age18_0001.zkey` to frontend for browser proving.
- Copy `verification_key.json` to smart contract verifier.

## Quick Commands:

```bash
npm run prove
npm run verify
```
