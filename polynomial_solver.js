const fs = require('fs');

// Step 1: Function to read and parse the JSON input
function readInput(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading file:", err);
        process.exit(1);
    }
}

// Step 2: Decode the y-values based on their respective bases
function decodeValue(base, value) {
    return parseInt(value, base);
}

// Step 3: Implement Lagrange Interpolation to solve for the constant term 'c'
function lagrangeInterpolation(points, k) {
    let result = 0;

    for (let i = 0; i < k; i++) {
        let xi = points[i].x;
        let yi = points[i].y;
        let li = 1;

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                li *= (0 - points[j].x) / (xi - points[j].x); // Lagrange basis polynomial
            }
        }

        result += li * yi;
    }

    return result; // This is the constant term 'c'
}

// Step 4: Main function to drive the program
function main() {
    const inputFilePath = 'test-case-2.json'; // Change the file path if necessary
    const input = readInput(inputFilePath);

    let n = input.keys.n; // Number of provided points
    let k = input.keys.k; // Minimum points required to solve

    // Step 5: Collect and decode points
    let points = [];
    let count = 0;
    for (let key in input) {
        if (key !== 'keys') {
            count++;
            let x = parseInt(key);
            let base = parseInt(input[key].base);
            let value = input[key].value;
            let y = decodeValue(base, value);
            points.push({ x, y });

            if (count >= n) break; // Only take 'n' points
        }
    }

    // Step 6: Use Lagrange Interpolation to find the constant term 'c'
    let secret = lagrangeInterpolation(points, k);
    console.log("The secret constant 'c' is:", secret);
}

// Step 7: Execute the main function
main();
