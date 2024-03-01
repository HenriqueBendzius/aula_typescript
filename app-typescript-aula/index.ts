let nomeCompleto = "Thiago xavier"
const pi = 3.14;
let idade = 39

console.log(nomeCompleto)
//Tipos 
let  frase:string = 'Olá' 
let peso:number = 97.5
let estaAprovado:boolean = true

//concatenar
let texto = `${frase} ${nomeCompleto}.  
Você tem ${idade} anos e pesa ${peso} kg.`

console.log(texto)


//Arrays

let texto2: string[] = []; 
let texto3: string[] = ["Olá", "Mundo"]; // é possível atribuir um array diretamente a

console.log("array texto 2")
texto2.push("Teste"); //adiciona item no final do array
texto2.push("Outro item");
texto2.push("Terceiro");
console.log(`Itens do texto 2: ${texto2.length}`)
texto2.forEach(item => {
    console.log(item)
})

let numeros:number[] = [1,2,3,15]
numeros.push(50)

for(let i=0; i< numeros.length; i++)
    console.log(numeros[i])



console.log("***Tipo complexo***")
let listarPessoas = [];
let pessoa:{nome:string, idade:number}  = {
    nome:"João",
    idade: 30
}
listarPessoas.push(pessoa);

let outraPessoa: {nome:string, idade:number} ={
    nome :"Maria",
    idade : 25
}
listarPessoas.push(outraPessoa)
console.log(listarPessoas)

//Listar pessoas

listarPessoas.forEach(pessoa =>{
    console.log(pessoa.nome)
})

for(let p = 0; p < listarPessoas.length; p++)
    console.log(listarPessoas[p].nome)
