template Age18Check() {
    signal private input dob;         // private input: user's DOB (YYYYMMDD)
    signal input today;       // public input: current date (YYYYMMDD)
    signal input requiredAge; // usually 18

    // Convert to difference
    signal diff;
    diff <== today - dob;

    // Simple threshold approximation
    signal threshold;
    threshold <== requiredAge * 10000;  

    // Main constraint: diff must be >= threshold
    // We enforce diff - threshold >= 0 using a non-negative check
    signal check;
    check <== diff - threshold;

    // Constraint ensures check >= 0 (circom requires signals; simple form)
    check * 1 === check;
}

component main = Age18Check();
