// parametros
function soma(num1,num2){
    return num1 + num2;
}

console.log(soma(5,7));
console.log(soma(12,36));

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Pontes"));
console.log(nomeIdade("Pontes", 44));

function multiplica(num1 = 1, num2 = 1 ){
    return num1 * num2;
}

console.log(multiplica(soma(5,5),soma(2,2)));
console.log(multiplica(soma(4,5)));
console.log(multiplica(soma(3,5), soma(2,2)));