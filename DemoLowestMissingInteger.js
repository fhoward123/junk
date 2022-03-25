// A is array of N integers
// Return the smallest positive integer (>0) that does not occur in A
// e.g. if A = [1, 3, 6, 4, 1, 2] then return 5
// e.g. if A = [-1, -3] then return 1

// Given N is integer [1..100000]
// Each element in "A" is integer [-1000000..1000000]

function solution(A) {
    const maxNumAllowed = 1000000;
    const minNumAllowed = 1;
    const maxSizeAllowed = 100000;
    let lowestInt = 1;

    // If the input data is larger than the defined max then return 1
    if (A.length > maxSizeAllowed ) return lowestInt;

    // Create a set to hold unique input values
    const numsFound = new Set();

    // Process inputs values and add valid numbers to "Set"
    A.forEach(function (num) {
        if (num >= minNumAllowed && num <= maxNumAllowed) numsFound.add(num);
    });

    // Determine number of loops needed to check values in "Set"
    const sizeOfSet = numsFound.size;

    // Loop for quantity of numbers in "Set"
    for (let i = 1; i <= sizeOfSet; i += 1) {
        // Increment "lowestInt" if it is in the "Set" already
        if (numsFound.has(lowestInt)) lowestInt += 1;
        else break; // Exit loop when "lowestInt" NOT in "Set" is found
    }
    // Return the "lowestInt" NOT in the "Set"
    return lowestInt;
};

let result = solution([1, 3, 6, 4, 1, 2]); // 5
console.log(result);
result = solution([1, 2, 3]); // 4
console.log(result);
result = solution([-1, -3]); // 1
console.log(result);
result = solution([100000, 1000000, -1000000, 5, 10, 847586]); // 1
console.log(result);
result = solution([-239843, 3483, 0, 1, 383, 10000000]) // 2
console.log(result);
