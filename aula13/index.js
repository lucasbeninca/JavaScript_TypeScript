// Escapando caracteres em strings
// Exemplo de string com aspas duplas escapadas
let umaString = "Um texto com \"aspas\" duplas";
console.log(umaString);

let outraString = '12345678';
console.log(outraString[4]); // Acessando o caractere na posição 4
console.log(outraString.charAt(4)); // Acessando o caractere na posição 4 usando charAt

// Concatenação de strings
console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);

// indices de strings
console.log(umaString.indexOf('texto')); // Encontrando a posição da substring 'texto'
console.log(umaString.lastIndexOf('texto',3)); // Encontrando a última posição da substring 'texto' até o índice 3
console.log(umaString.indexOf('texto',3)); // Encontrando a posição da substring 'texto' a partir do índice 3