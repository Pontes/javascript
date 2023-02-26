const alunos = ['joão','Julina','Ana','Caio','Lara','Marjorie','Guilherme','Aline','Fabiana', 'Andre', 'Carlos','Paulo','Bia','Vivian','Isabela','Vinícius','Renan','Renata','Daisy','Camilo'];

//dividir o array de alunos
//dividindo em 10 alunos 0,10, levando em consideração que o indice 10 e excluso
const sala1 = alunos.slice(0,10);
const sala2 = alunos.slice(10);
console.log(sala1);
console.log(sala2);

//utilizando valor dinamico
const salaD1 = alunos.slice(0, alunos.length / 2);
const salaD2 = alunos.slice(alunos.length /2);

console.log(salaD1);
console.log(salaD2);