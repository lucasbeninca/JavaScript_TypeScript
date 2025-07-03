let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const tempA = varA; // Store the value of varA temporarily
varA = varB;
varB = varC;
varC = tempA;

console.log(varA, varB, varC);

// usando array
[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);