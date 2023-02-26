const valores = [10,8,6,7,8,9,5.5];
const numeros = [5,6,7,2,7,9];
console.log(valores);
console.log(numeros);

const novoArray = valores.concat(numeros);
console.log(novoArray);
const novoArray2 = novoArray.filter(novoArray=>novoArray >=7);
console.log(novoArray2);

const na1 = novoArray.find(element => element == 7);
console.log(`usando find ${na1}`);

novoArray.forEach(element => console.log(element));
