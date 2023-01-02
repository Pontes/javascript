function ganhoPorHora(salario, horasTrabalhadasMes){
    const salarioHora = (salario / horasTrabalhadasMes);
    //return Math.round(salarioHora);
    //return salarioHora.toFixed(2);
    return salarioHora.toLocaleString('pt-Br', {style:'currency', currency: 'BRL'});
    
}

console.log(ganhoPorHora(3000,176));