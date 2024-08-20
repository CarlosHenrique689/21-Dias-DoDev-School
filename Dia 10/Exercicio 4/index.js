let numeroEscolhido = Number(prompt("Insira um número inteiro e positivo a sua escolha para ver sua sequência de Fibonacci."));
let confirmaçãoWhile = true;

while(confirmaçãoWhile){
    if(Number.isInteger(numeroEscolhido) && numeroEscolhido > 0){confirmaçãoWhile = false}
    else{numeroEscolhido = Number(prompt("Erro.. Insira novamente um número inteiro e positivo a sua escolha para ver sua sequência de Fibonacci."))}};

let numeroEscolhidoMenos1 = numeroEscolhido - 1;
let ArrayFibonacci = [numeroEscolhidoMenos1, numeroEscolhido];

ArrayFibonacci[2] = ArrayFibonacci[0] + ArrayFibonacci[1];
ArrayFibonacci[3] = ArrayFibonacci[1] + ArrayFibonacci[2];
ArrayFibonacci[4] = ArrayFibonacci[2] + ArrayFibonacci[3];
ArrayFibonacci[5] = ArrayFibonacci[3] + ArrayFibonacci[4];
ArrayFibonacci[6] = ArrayFibonacci[4] + ArrayFibonacci[5];
ArrayFibonacci[7] = ArrayFibonacci[5] + ArrayFibonacci[6];
ArrayFibonacci[8] = ArrayFibonacci[6] + ArrayFibonacci[7];
ArrayFibonacci[9] = ArrayFibonacci[7] + ArrayFibonacci[8];

console.log("Aqui está a sequência de Fibonacci do número que você escolheu: " + ArrayFibonacci);