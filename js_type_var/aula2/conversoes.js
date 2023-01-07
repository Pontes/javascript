//conversoes tipo de dados 
//booleanos

//conversão implicita
const numero = 456;
const numeroString = "456";
const numeroString2 = Number("456a");

console.log(numero === numeroString);
console.log(numero == numeroString);

//conversão explicita

console.log(numero + numeroString);
console.log(numero + parseInt(numeroString));
console.log(numero + Number(numeroString));
console.log(numero + numeroString2);