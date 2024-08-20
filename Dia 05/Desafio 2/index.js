let valorDesejado = undefined
let quantidadeEmLitros = undefined
let OpçãoDoCliente = Number(prompt('Olá, seja bem vindo ao nosso posto de gasolina. ' 
    + 'Por favor, digite " 1 " para abastecer com gasolina, " 2 " para abastecer com álcool, ou " 3 " para calibrar os pneus.'))

switch(OpçãoDoCliente){

    case 1:
        valorDesejado = Number(prompt('Por favor, digite o valor desejado em "R$" para ser abastecido com gasolina. (Valor do litro de gasolina: R$5.00)'))
        if(isNaN(valorDesejado)){console.log('Ops, ouve algum erro. Por favor, tente novamente.')}
        else{quantidadeEmLitros = parseInt(valorDesejado / 5)
            console.log('Muito bem! foram abastecidos ' + quantidadeEmLitros + ' litros de gasolina em seu veículo. Muito obrigado e volte sempre!')}
        break;

    case 2:
        valorDesejado = Number(prompt('Por favor, digite o valor desejado em "R$" para ser abastecido com álcool. (Valor do litro de álcool: R$3.00)'))
        if(isNaN(valorDesejado)){console.log('Ops, ouve algum erro. Por favor, tente novamente.')}
        else{quantidadeEmLitros = parseInt(valorDesejado / 3)
            console.log('Muito bem! foram abastecidos ' + quantidadeEmLitros + ' litros de álcool em seu veículo. Muito obrigado e volte sempre!')}
        break;

    case 3:
        console.log('Muito bem! Os pneus do seu veículo foram calibrados com sucesso. Muito obrigado e volte sempre!')
        break;

    default:
        console.log('Ops, ouve algum erro. Por favor, tente novamente.')
        break;};