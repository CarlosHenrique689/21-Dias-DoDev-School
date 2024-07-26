let nome = String(prompt('Olá, seja bem vindo ao Caixa Eletrônico! Por favor, insira o seu nome completo.'))
let CPF = String(prompt('Por favor, insira o seu CPF. (Use apenas números.)'))
let saldoTotal = 20000
let saqueOuDepósito = undefined
let valorEscolhidoSaque = undefined
let valorEscolhidoDepósito = undefined
let continuarOuParar = undefined
let maiorValorInserido = 0
let médiaDosValoresInseridos = 0
let contadorDeValoresInseridos = 0
let verificaçãoCPF = true
let verificaçãoContinuarOuParar = undefined
let novoCPF = CPF.replace(".", ",")
let novoNovoCPF = novoCPF.replace(" ", ",")

while(verificaçãoCPF)
    {if(novoNovoCPF.length === 11){novoNovoCPF = Number(novoNovoCPF); 
        if((Number.isInteger(novoNovoCPF))){verificaçãoCPF = false}
        else{novoNovoCPF = String(prompt('CPF inválido, por favor insira o seu CPF novamente, utilizando APENAS NÚMEROS.'))}}
    else{novoNovoCPF = String(prompt('CPF inválido, por favor insira o seu CPF novamente, utilizando APENAS NÚMEROS.'))}};

do{
    verificaçãoContinuarOuParar = true
    saqueOuDepósito = Number(prompt('Seu saldo é de R$' + saldoTotal + '. Caso você deseje fazer um saque, insira " 1 ". Caso você dejese fazer um depósito, insira " 2 ". '))
    switch(saqueOuDepósito){

        case 1:
            valorEscolhidoSaque = Number(prompt('Insira o valor que deseja sacar. Valor máximo possível de R$' + saldoTotal + ' (Use apenas números.)'))
            if(valorEscolhidoSaque > 0 && valorEscolhidoSaque <= saldoTotal){
                saldoTotal -= valorEscolhidoSaque
                if(valorEscolhidoSaque > maiorValorInserido){maiorValorInserido = valorEscolhidoSaque}
                contadorDeValoresInseridos++
                médiaDosValoresInseridos += valorEscolhidoSaque
                continuarOuParar = Number(prompt('Saque realizado com sucesso. Caso você deseje fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))
                while(verificaçãoContinuarOuParar)
                    {if(continuarOuParar === 1 || continuarOuParar === 2){verificaçãoContinuarOuParar = false}
                    else{continuarOuParar = Number(prompt('Resposta inválida, por favor, responda de forma coerente. Caso você deseje fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))}}
                break;}
            else{continuarOuParar = Number(prompt('Falha na tentavida de SAQUE. Caso você deseje tentar fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))
                while(verificaçãoContinuarOuParar)
                    {if(continuarOuParar === 1 || continuarOuParar === 2){verificaçãoContinuarOuParar = false}
                    else{continuarOuParar = Number(prompt('Resposta inválida, por favor, responda de forma coerente. Caso você deseje tentar fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))}}
                break;}

        case 2:
            valorEscolhidoDepósito = Number(prompt('Insira o valor que ira depósitar. (Use apenas números.)'))
            if(valorEscolhidoDepósito > 0){
                saldoTotal += valorEscolhidoDepósito
                if(valorEscolhidoDepósito > maiorValorInserido){maiorValorInserido = valorEscolhidoDepósito}
                contadorDeValoresInseridos++
                médiaDosValoresInseridos += valorEscolhidoDepósito
                continuarOuParar = Number(prompt('Depósito realizado com sucesso. Caso você deseje fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))
                while(verificaçãoContinuarOuParar)
                    {if(continuarOuParar === 1 || continuarOuParar === 2){verificaçãoContinuarOuParar = false}
                    else{continuarOuParar = Number(prompt('Resposta inválida, por favor, responda de forma coerente. Caso você deseje fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))}}
                break;}
            else{continuarOuParar = Number(prompt('Falha na tentavida de DEPÓSITO. Caso você deseje tentar fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))
                while(verificaçãoContinuarOuParar)
                    {if(continuarOuParar === 1 || continuarOuParar === 2){verificaçãoContinuarOuParar = false}
                    else{continuarOuParar = Number(prompt('Resposta inválida, por favor, responda de forma coerente. Caso você deseje tentar fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))}}
                break;}

        default:continuarOuParar = Number(prompt('Erro na escolha de SAQUE ou DEPÓSITO. Caso você deseje fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))
            while(verificaçãoContinuarOuParar)
                {if(continuarOuParar === 1 || continuarOuParar === 2){verificaçãoContinuarOuParar = false}
                else{continuarOuParar = Number(prompt('Resposta inválida, por favor, responda de forma coerente. Caso você deseje tentar fazer outra operação, insira " 1 ". Caso você deseje parar e sair, insira " 2 ".'))}}
            break;}
}while(continuarOuParar === 1);

médiaDosValoresInseridos = médiaDosValoresInseridos / contadorDeValoresInseridos

console.log('Seu saldo total é de R$' + saldoTotal)
console.log('O maior valor inserido foi de R$' + maiorValorInserido)
console.log('A média dos valores inseridos é de R$' + médiaDosValoresInseridos)
console.log('Obrigado por utilizar o Caixa Eletrônico ' + nome + '. Volte sempre!');