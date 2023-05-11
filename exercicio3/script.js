//Crie a const para a frase aqui
let guardaFrase = `"Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const novaFrase = guardaFrase.replace('verde', 'rosa').replace('azul', 'laranja');

//console.log(novaFrase)

const temVerde = novaFrase.includes('verde');
const temLaranja = novaFrase.includes('laranja');
//c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.
//console.log(temVerde)
//console.log(temLaranja)
//console.log(novaFrase);

// EXTRA: fazer o trecho "mas não deixe o gato sair" ficar em letras maiúsculas
const novaFraseComMaiusculas = novaFrase.replace('BOAS VINDAS', 'BOAS VINDAS').replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR');

console.log(novaFraseComMaiusculas);