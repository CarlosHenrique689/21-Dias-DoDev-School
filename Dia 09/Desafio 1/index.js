let repetirOuParar = undefined

do {
    let nome = String(prompt('Qual é o seu nome?'))
    let idade = Number(prompt('Qual é a sua idade?'))
    let peso = Number(prompt('Qual é o seu peso em kg?'))
    let alturaSemReplace = String(prompt('Qual é a sua altura em Metros? Ex: 1.75'))
    let profissão = String(prompt('Qual é a sua profissão atual?'))
    let condiçãoDoWhile = undefined
    let alturaComReplaceIncompleto = alturaSemReplace.replace(/,/g, ".")
    let arrayAltura = alturaComReplaceIncompleto.split(" ")
    let altura = arrayAltura.join("")
    altura = parseFloat(altura)
    let nomeTrim = nome.trim()
    let profissãoTrim = profissão.trim()

    do {
        condiçãoDoWhile = true
        if(Number.isInteger(idade) && idade > 0){condiçãoDoWhile = false}
        else{idade = Number(prompt('Erro... Por favor, responda novamente. Qual é a sua idade?'))};
    } while (condiçãoDoWhile);

    do {
        condiçãoDoWhile = true
        if(Number.isInteger(peso) && peso > 0){condiçãoDoWhile = false}
        else{peso = Number(prompt('Erro... Por favor, responda novamente. Qual é o seu peso em kg?'))};
    } while (condiçãoDoWhile);

    do {
        condiçãoDoWhile = true
        if(isNaN(altura) || altura < 1.0)
            {alturaSemReplace = String(prompt('Erro... Por favor, responda novamente. Qual é a sua altura em Metros? Ex: 1.75'));
            alturaComReplaceIncompleto = alturaSemReplace.replace(/,/g, ".")
            arrayAltura = alturaComReplaceIncompleto.split(" ")
            altura = arrayAltura.join("")
            altura = parseFloat(altura)}
        else{condiçãoDoWhile = false};
    } while (condiçãoDoWhile);

    console.log("Olá " + nomeTrim + ", você tem " + idade + " anos, é " + profissãoTrim + ", tem " + altura + "M de altura e pesa " + peso + "KG.")

    console.log("//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")

    if(idade >= 18){console.log("Você está liberado para tomar umas geladas!")}else{console.log("Sem gelada para você.")}

    console.log("//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")

    let idadeEmDias = idade * 365
    let idadeEmMeses = idadeEmDias / 30
    let idadeEmSemanas = idadeEmDias / 7
    let idadeEmDiasArrendondado = idadeEmDias.toFixed(2)
    let idadeEmSemanasArredondado = idadeEmSemanas.toFixed(2)
    let idadeEmMesesArredondado = idadeEmMeses.toFixed(2)

    console.log("Você tem " + idade + " anos, ou " + idadeEmMesesArredondado + " meses, ou " + idadeEmSemanasArredondado + " semanas, ou " + idadeEmDiasArrendondado + " dias de vida.")

    console.log("//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")

    let IMC = peso / (altura*altura)
    let IMCArredondado = IMC.toFixed(2)
    let FaixaIMC = undefined

    if(IMCArredondado >= 18.50 && IMCArredondado <= 25.00){FaixaIMC = "NORMALIDADE."}
    else if(IMCArredondado < 18.50){FaixaIMC = "MAGREZA."}
    else if(IMCArredondado >= 25.01 && IMCArredondado <= 30.00){FaixaIMC = "SOBREPESO."}
    else if(IMCArredondado >= 30.01){FaixaIMC = "OBESIDADE."}

    console.log("O seu IMC é de " + IMCArredondado + "kg/m2, e seu IMC se encontra na faixa de " + FaixaIMC)

    console.log("//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")

    let anoDeNascimento = 2024 - idade
    let idadeCrescente = 0

    for(anoDeNascimento; anoDeNascimento <= 2024; anoDeNascimento++ && idadeCrescente++){console.log(anoDeNascimento + " - " + idadeCrescente + " ano(s) de idade.")}

    repetirOuParar = Number(prompt('Caso você deseje inseir novos dados digite " 1 ", ou caso você dejese finalizar e sair digite " 2 ".'))
    let verificaçãoRepetirOuParar = true

    while(verificaçãoRepetirOuParar){
    if(repetirOuParar === 1 || repetirOuParar === 2){verificaçãoRepetirOuParar = false}
    else{repetirOuParar = Number(prompt('Erro... Por favor, responda de forma coerente. Caso você deseje inseir novos dados digite " 1 ", ou, caso você dejese finalizar e sair digite " 2 ".'))}}
    console.log("//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////")
} while (repetirOuParar === 1);