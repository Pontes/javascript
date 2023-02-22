// const usuarioLogin = (pessoa) =>{
//     let array =[]
//     for(i=0;i<9000;i++){
//         array.push(i)
//     }
//     return `${pessoa} logou com sucesso no sistema!`
// }

// console.log(usuarioLogin("Luke"));

// const acesso = (nome) => {
//     return ` ${nome} logou com sucesso no sistema!`;
// }

// const usuarioLogin = (nome) => {
//     let array =[]
//     for(i = 0; i< 90000; i++){
//         array.push(i)
//     }
//     return acesso(nome)
// }

// console.log(usuarioLogin("luke"));

const acesso = (nome) =>{
    return `${nome} Logou com sucesso no sistema!`;
}

const autentica = (cargo) => {
    let array = []
    for(i=0; i< cargo; i++){
        array.push(i);
    }
    return true;
}

const login = (pessoa, autentica) =>{
    if(pessoa.cargo === `funcionario`){
        autentica(90000);
    }else if(pessoa.cargo){
        autentica(900000);
    }
    return acesso(pessoa.nome);
}