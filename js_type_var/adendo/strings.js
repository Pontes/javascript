const palavra = "Alura";
console.log(palavra.length);
console.log(palavra.charAt(2));// exibe o caracter na posição 2
console.log(palavra[1]);// exibe o caracter da posição 1
console.log(palavra.indexOf("a")); //exibe a posição do caracter
console.log(palavra.toUpperCase()); //exibe caracteres em letras maiusculas
console.log(palavra.toLowerCase()); // exibe caracter em letras minusculas

let frase = "Mergulhando em tecnologia";
console.log(frase.substring(0,11)); //exibe mergulhando
console.log(frase.slice(0,11));

let nome = "Pontes";
let comunicacao = " Olá, sr. nomeusuario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusuario", nome));// faz a troca de um conjunto de caracteres para o conteúdo da variavel nome

let novaString = "Programa nas principais linguagens e plataformas. Explore linguagens como ";
console.log(novaString.concat("Javascript, ").concat("Python, "). concat("e C#"));

let linguagens = "Javascript; Java; C#;PHP; Python; Go; Vb; SQL;C; C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens);
//spĺit é um array de strings

let login = "pontes@pontesti.com.br     ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco);
//o trim remove espaço no inicio ou no final