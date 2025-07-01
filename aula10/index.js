// operadores aritméticos
let a = 10;
let b = 5;
let soma = a + b;
let subtracao = a - b;
let multiplicacao = a * b;
let divisao = a / b;
let modulo = a % b;
let exponenciacao = a ** b;
console.log("Soma:", soma);
console.log("Subtração:", subtracao);
console.log("Multiplicação:", multiplicacao);
console.log("Divisão:", divisao);
console.log("Módulo:", modulo); // resto da divisão
console.log("Exponenciação:", exponenciacao);

// operadores de comparação
let igual = a == b;
let diferente = a != b;
let maiorQue = a > b;
let menorQue = a < b;
let maiorOuIgual = a >= b;
let menorOuIgual = a <= b;
console.log("Igual:", igual);
console.log("Diferente:", diferente);
console.log("Maior que:", maiorQue);
console.log("Menor que:", menorQue);
console.log("Maior ou igual:", maiorOuIgual);
console.log("Menor ou igual:", menorOuIgual);

// ordem de precedência
let resultado = 10 + 5 * 2; // multiplicação tem precedência sobre adição
console.log("Resultado da ordem de precedência:", resultado); 

// operadores de incremento e decremento
let x = 10;
x++; // pós-incremento
console.log("Pós-incremento:", x);
x--; // pós-decremento
console.log("Pós-decremento:", x);
++x; // pré-incremento
console.log("Pré-incremento:", x);
--x; // pré-decremento
console.log("Pré-decremento:", x);  

let contador = 0;
let passo = 2;
contador += passo;
console.log("Contador com passo:", contador); // 2

//NaN - Not a Number
let notANumber = "texto" / 2; // operação inválida
console.log("Resultado de operação inválida:", notANumber); // NaN

// Usando parseInt e parseFloat
let inteiro = parseInt("10.5"); // converte para inteiro
let flutuante = parseFloat("10.5"); // converte para float
console.log("Inteiro:", inteiro); // 10
console.log("Flutuante:", flutuante); // 10.5   