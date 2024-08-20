let indice = 0;
let numerosEscolhidos = [];
let numeroDaVez = 1;
let confirmaçãoWhile = undefined;

console.log("A diante você terá que inseir 5 números inteiros e positivos a sua escolha.");

for(let contador = 0; contador <= 4; contador++){

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