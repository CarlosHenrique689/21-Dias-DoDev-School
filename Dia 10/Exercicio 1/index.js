let confirmaçãoDoWhile = true;
let numeros = [];
let índice = 0;
let confirmçãoWhile = undefined;

do {
    confirmçãoWhile = true
    numeros[índice] = Number(prompt("Insira um Número inteiro e positivo."))
    while(confirmçãoWhile){
        if(Number.isInteger(numeros[índice]) && numeros[índice] > 0){let desejaContinuar = prompt('Deseja por outro Número? Caso queira insira " s ".')
            if(desejaContinuar != "s"){confirmaçãoDoWhile = false}
            índice++
            confirmçãoWhile = false}
        else{numeros[índice] = Number(prompt("Erro... Insira um Número inteiro e positivo."))}}
} while (confirmaçãoDoWhile);

console.log(numeros);







