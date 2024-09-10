let arrayA = [];
let arrayB = [];
let numerosEmComum = [];
let numerosEmComumUnicos = [];
let indexArrayA = 0;
let indexArrayB = 0;
let indexNumerosEmComum = 0;
let numeroDaVez = 1;
let contador = undefined;
let variavelDeBolha1 = undefined;
let variavelDeBolha2 = undefined;

arrayA[indexArrayA] = prompt("A seguir insira 10 números inteiros aleatórios. Insira qualquer coisa para proseguir.");

for(contador = 0; contador < 10; contador++){
    arrayA[indexArrayA] = Number(prompt("Insira o " + numeroDaVez + "º número inteiro."))
    indexArrayA++
    numeroDaVez++
};
  
numeroDaVez = 1;
  
arrayB[indexArrayB] = prompt("A seguir insira mais 10 números inteiros aleatórios. Insira qualquer coisa para proseguir.");

for(contador = 0; contador < 10; contador++){
    arrayB[indexArrayB] = Number(prompt("Insira o " + numeroDaVez + "º número inteiro."))
    indexArrayB++
    numeroDaVez++
};

indexArrayA = -1;
indexArrayB = 0;

function comparação(arrayA, arrayB){
    for(variavelDeBolha1 = 0; variavelDeBolha1 < 10; variavelDeBolha1++){
        indexArrayA++
        indexArrayB = 0
        for(variavelDeBolha2 = 0; variavelDeBolha2 < 10; variavelDeBolha2++){
            if(arrayA[indexArrayA] === arrayB[indexArrayB]){
                numerosEmComum[indexNumerosEmComum] = arrayB[indexArrayB]; indexNumerosEmComum++
            }
            indexArrayB++
        }
    }
    numerosEmComumUnicos = Array.from(new Set(numerosEmComum))
    return console.log(numerosEmComumUnicos)
};

console.log("Primeira lista de números escolhidos.");
console.log(arrayA);
console.log("");
console.log("Segunda lista de números escolhidos.");
console.log(arrayB);
console.log("");
console.log("Lista de números em comum entre as listas.");
comparação(arrayA, arrayB);