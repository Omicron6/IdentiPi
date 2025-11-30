import { groth16 } from "snarkjs";
import fs from "fs";

const vKey = JSON.parse(fs.readFileSync("verification_key.json", "utf8"));
const proof = JSON.parse(fs.readFileSync("proof.json", "utf8"));  
const publicSignals = JSON.parse(fs.readFileSync("publicSignals.json", "utf8"));

console.log("Starting verification...");
const result = await groth16.verify(vKey, publicSignals, proof);
console.log("Verification result:", result);
