import { groth16 } from "snarkjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function verifyProof() {
  try {
    const vkeyPath = path.join(__dirname, "../build/verification_key.json");
    const proofPath = path.join(__dirname, "./proof.json");
    const publicSignalsPath = path.join(__dirname, "./publicSignals.json");

    console.log("🔍 Verifying proof with:");
    console.log("   Verification key:", vkeyPath);
    console.log("   Proof:", proofPath);
    console.log("   Public signals:", publicSignalsPath);

    const vKey = JSON.parse(fs.readFileSync(vkeyPath, "utf8"));
    const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
    const publicSignals = JSON.parse(fs.readFileSync(publicSignalsPath, "utf8"));

    const isValid = await groth16.verify(vKey, publicSignals, proof);

    if (isValid) {
      console.log("✔ Proof is VALID!");
    } else {
      console.log("❌ Proof is INVALID!");
    }
  } catch (error) {
    console.error("❌ Error verifying proof:", error.message);
    process.exit(1);
  }
}

verifyProof();
