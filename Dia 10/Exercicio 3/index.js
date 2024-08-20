let indice = 0;
let numerosEscolhidos = [];
let numeroDaVez = 1;
let confirmaçãoWhile = undefined;

console.log("A diante você terá que inseir uma quantidade de números inteiros e positivos a sua escolha.");

let qtdDeNumerosEscolhidos = Number(prompt("Insira a quantiade de números que você deseja escolher a seguir."));

confirmaçãoWhile = true;
while(confirmaçãoWhile){   
    if(Number.isInteger(qtdDeNumerosEscolhidos) && qtdDeNumerosEscolhidos > 0){confirmaçãoWhile = false}
    else{qtdDeNumerosEscolhidos = Number(prompt("Erro... Insira novamente a quantiade de números que você deseja escolher a seguir."))}};

for(let contador = 0; contador < qtdDeNumerosEscolhidos; contador++){

    confirmaçãoWhile = true;
    numerosEscolhidos[indice] = Number(prompt("insira o " + numeroDaVez + "º número inteiro e positivo."));
    while(confirmaçãoWhile){ 
        if(Number.isInteger(numerosEscolhidos[indice]) && numerosEscolhidos[indice] > 0){confirmaçãoWhile = false}
        else{numerosEscolhidos[indice] = Number(prompt("Erro... insira novamente o " + numeroDaVez + "º número inteiro e positivo."))}};
    indice++;
    numeroDaVez++;};

console.log(numerosEscolhidos);

numerosEscolhidos.reverse();

console.log(numerosEscolhidos);