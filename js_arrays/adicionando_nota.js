const notas  = [10,6,8];
notas.push(7);
console.log(notas);
let medias = 0;

for(i = 0; i<= notas.length-1; i++){
    medias += notas[i];
}
notaFinal = medias / notas.length;
console.log(notaFinal);