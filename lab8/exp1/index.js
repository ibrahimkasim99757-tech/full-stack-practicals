const fs = require('fs');

console.log("Program started");

// ---------------- BLOCKING ----------------
console.log("\n--- Blocking Operation ---");

const data = fs.readFileSync('input.txt', 'utf8');

console.log("File reading completed");
console.log("File content:", data);

console.log("After blocking operation");


// ---------------- NON-BLOCKING ----------------
console.log("\n--- Non-Blocking Operation ---");

fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    console.log("File reading completed");
    console.log("File content:", data);
});

console.log("After non-blocking operation");

console.log("\nProgram ended");