const texto1 = "Olá, Mundo!!!";
const texto2 = 'Olá, Mundo!!!!!';
const senha = "superSegura123456!@";

const stringDeNumeros = "3465";
const citacao = 'menu nome é ';

//template Stringo ou Template literal


//contatecao (+)
const meuNome = "Pontes " ;
console.log(citacao + meuNome);

//texto unicode

const cifrao = '\u0024';
const aMaiusculo = '\u0041';
const tique = '\u2705';
const hiragana = '\u3041';

console.log(cifrao);
console.log(aMaiusculo);
console.log(tique);
console.log(hiragana);

//comparativo em strings
const cidade  = "belo horizonte";
const input = "Belo Horizonte'";

const inputMinusculo = input.toLowerCase();
console.log(cidade === input);
console.log(cidade === inputMinusculo);
console.log(senha.length);


