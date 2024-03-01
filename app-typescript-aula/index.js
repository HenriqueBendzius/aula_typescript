"use strict";
let nomeCompleto = "Thiago xavier";
const pi = 3.14;
let idade = 39;
console.log(nomeCompleto);
let frase = 'Olá';
let peso = 97.5;
let estaAprovado = true;
let texto = `${frase} ${nomeCompleto}.  
Você tem ${idade} anos e pesa ${peso} kg.`;
console.log(texto);
let texto2 = [];
let texto3 = ["Olá", "Mundo"];
console.log("array texto 2");
texto2.push("Teste");
texto2.push("Outro item");
texto2.push("Terceiro");
console.log(`Itens do texto 2: ${texto2.length}`);
texto2.forEach(item => {
    console.log(item);
});
let numeros = [1, 2, 3, 15];
numeros.push(50);
for (let i = 0; i < numeros.length; i++)
    console.log(numeros[i]);
console.log("***Tipo complexo***");
let listarPessoas = [];
let pessoa = {
    nome: "João",
    idade: 30
};
listarPessoas.push(pessoa);
let outraPessoa = {
    nome: "Maria",
    idade: 25
};
listarPessoas.push(outraPessoa);
console.log(listarPessoas);
listarPessoas.forEach(pessoa => {
    console.log(pessoa.nome);
});
for (let p = 0; p < listarPessoas.length; p++)
    console.log(listarPessoas[p].nome);
