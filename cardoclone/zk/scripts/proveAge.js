import { groth16 } from "snarkjs";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateProof() {
  try {
    const inputPath = path.join(__dirname, "../inputs/sample_input.json");
    const wasmPath = path.join(__dirname, "../build/age18.wasm");
    const zkeyPath = path.join(__dirname, "../build/age18_0001.zkey");
    
    const input = JSON.parse(fs.readFileSync(inputPath, "utf8"));

    console.log("🔍 Generating proof with:");
    console.log("   Input:", inputPath);
    console.log("   WASM:", wasmPath);
    console.log("   ZKey:", zkeyPath);

    const { proof, publicSignals } = await groth16.fullProve(
      input,
      wasmPath,
      zkeyPath
    );

    const proofPath = path.join(__dirname, "./proof.json");
    const publicSignalsPath = path.join(__dirname, "./publicSignals.json");

    fs.writeFileSync(proofPath, JSON.stringify(proof, null, 2));
    fs.writeFileSync(publicSignalsPath, JSON.stringify(publicSignals, null, 2));

    console.log("✔ Proof generated successfully!");
    console.log("   Proof saved:", proofPath);
    console.log("   Public signals saved:", publicSignalsPath);
  } catch (error) {
    console.error("❌ Error generating proof:", error.message);
    process.exit(1);
  }
}

generateProof();
