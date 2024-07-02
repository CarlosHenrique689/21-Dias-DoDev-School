let numero1 = Number(prompt('Olá, seja bem vindo a calculadora! Selecione o primeiro número do seu calculo.'))
let operçãomatemática = String(prompt('Selecione " + " para somar, " - " para subtrair, " / " para dividir, e " * " para multiplicar.'))
let numero2 = Number(prompt('Selecione o segundo número do seu calculo.'))
let resultado = null

switch(operçãomatemática){

    case "+":
        resultado = numero1 + numero2
        console.log('O resultado desta operaçâo é: ' + resultado)
        if(isNaN(resultado)){console.log('Erro... Por favor, reinicie a calculadora e tente novamente.')}
        break;
    
    case "-":
        resultado = numero1 - numero2
        console.log('O resultado desta operaçâo é: ' + resultado)
        if(isNaN(resultado)){console.log('Erro... Por favor, reinicie a calculadora e tente novamente.')}
        break;

    case "/":
        resultado = numero1 / numero2
        console.log('O resultado desta operaçâo é: ' + resultado)
        if(isNaN(resultado)){console.log('Erro... Por favor, reinicie a calculadora e tente novamente.')}
        break;

    case "*":
        resultado = numero1 * numero2
        console.log('O resultado desta operaçâo é: ' + resultado)
        if(isNaN(resultado)){console.log('Erro... Por favor, reinicie a calculadora e tente novamente.')}
        break;

    default:
        console.log('Erro... Por favor, reinicie a calculadora e tente novamente.')
        break;}