let nome = undefined;
let salario = undefined;
let salarioFormatBRL = undefined;
let salarioReajustado = undefined;
let confirmaçaoDeResposta = undefined;
let confirmaçaoWhile = true;
let continuarOuParar = undefined;
let porcentagemDoAumento = undefined;

function informaçõesIniciais(){
    nome = prompt("Qual é o seu Nome?")
    confirmaçaoDeResposta = Number(prompt('Nome inserido: "' + nome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))

    while(confirmaçaoWhile){
        if(confirmaçaoDeResposta === 1 || confirmaçaoDeResposta === 2){
            if(confirmaçaoDeResposta === 1){confirmaçaoWhile = false}
            else{nome = prompt("Qual é o seu Nome?")
                confirmaçaoDeResposta = Number(prompt('Nome inserido: "' + nome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçaoDeResposta = Number(prompt('Erro... Responda novamente. Nome inserido: "' + nome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçaoWhile = true

    salarioFormatBRL = prompt("Qual o valor do seu salário em R$?")
    salarioFormatBRL = salarioFormatBRL.replaceAll(".", "")
    salarioFormatBRL = salarioFormatBRL.replaceAll(",", ".")
    salarioFormatBRL = parseFloat(salarioFormatBRL)
    salario = salarioFormatBRL
    salarioFormatBRL = salarioFormatBRL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    confirmaçaoDeResposta = Number(prompt('Valor inserido: ' + salarioFormatBRL + ' está correto? Insira "1" para SIM, ou "2" para NÃO.'))

    while(confirmaçaoWhile){
        if(confirmaçaoDeResposta === 1 || confirmaçaoDeResposta === 2){
            if(confirmaçaoDeResposta === 1){confirmaçaoWhile = false}
            else{salarioFormatBRL = prompt("Qual o valor do seu salário em R$?")
                salarioFormatBRL = salarioFormatBRL.replaceAll(".", "")
                salarioFormatBRL = salarioFormatBRL.replaceAll(",", ".")
                salarioFormatBRL = parseFloat(salarioFormatBRL)
                salario = salarioFormatBRL
                salarioFormatBRL = salarioFormatBRL.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                confirmaçaoDeResposta = Number(prompt('Valor inserido: ' + salarioFormatBRL + ' está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçaoDeResposta = Number(prompt('Erro... Responda novamente. Valor inserido: ' + salarioFormatBRL + ' está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçaoWhile = true 
    
    calcularAumento(salario, nome) 
};

function calcularAumento(salario, nome){
    if(salario <= 1500){salarioReajustado = salario * 1.20; porcentagemDoAumento = "20%"}
    else if(salario <= 2000){salarioReajustado = salario * 1.15; porcentagemDoAumento = "15%"}
    else if(salario <= 3000){salarioReajustado = salario * 1.10; porcentagemDoAumento = "10%"}
    else{salarioReajustado = salario * 1.05; porcentagemDoAumento = "5%"}

    salarioReajustado = salarioReajustado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

    console.log("Nome do(a) colaborador(a): " + nome)
    console.log("Salário do(a) colaborador(a): " + salarioFormatBRL)
    console.log("Porcentagem de aumento do salário: " + porcentagemDoAumento)
    console.log("Novo salário reajustado: " + salarioReajustado)
    console.log("")
    
    novoCicloOuParar(nome);   
};

function novoCicloOuParar(nome){
    continuarOuParar = Number(prompt(nome + ', caso queira calcular novamente com outras informações, insira "1". Caso NÃO queira, insira qualquer outra coisa.'))
    
    if(continuarOuParar === 1){informaçõesIniciais()}
};

informaçõesIniciais();