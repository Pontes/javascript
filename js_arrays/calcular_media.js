// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// const media = (nota1 + nota2 + nota3 + nota4)/4;
// console.log(`media ${media}`);

const notas = [10,6.5,8,7.5];
let media = 0;

for(i=0; i <= notas.length-1; i++){
     media += notas[i];
}
mediaFinal = media / 4;

console.log(mediaFinal);
