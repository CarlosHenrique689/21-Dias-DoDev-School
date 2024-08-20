let nomeSemTrim = String(prompt("Por favor, insira o seu nome."))
let nome = nomeSemTrim.trim()
let idade = Number(prompt("Por favor, insira sua idade."))
let salárioBaseSemReplaceEArray = String(prompt("Por favor, insira o seu salário atual. EX: 1.500.00"))
let salárioBaseSemArray = salárioBaseSemReplaceEArray.replace(/,/g, ".")
salárioBaseSemArray = salárioBaseSemArray.split(" ")
let salárioBase = salárioBaseSemArray.join("")
let confirmaçãoDeDados = Number(prompt("Nome: " + nome + ", idade: " + idade + ", salário: R$" + salárioBase + '. Os dados estão corretos? Se sim, insira " 1 ", se não, insira " 2 " e preencha novamente.' ))
let confirmaçãoDoWhile = true

do {
    if(confirmaçãoDeDados === 1 || confirmaçãoDeDados === 2)
        {if(confirmaçãoDeDados === 1){confirmaçãoDoWhile = false}
        else{nomeSemTrim = String(prompt("Por favor, insira o seu nome."))
            nome = nomeSemTrim.trim()
            idade = String(prompt("Por favor, insira sua idade."))
            salárioBaseSemReplaceEArray = String(prompt("Por favor, insira o seu salário atual. EX: 1.500.00"))
            salárioBaseSemArray = salárioBaseSemReplaceEArray.replace(/,/g, ".")
            salárioBaseSemArray = salárioBaseSemArray.split(" ")
            salárioBase = salárioBaseSemArray.join("")
            confirmaçãoDeDados = Number(prompt("Nome: " + nome + ", idade: " + idade + ", salário: R$" + salárioBase + '. Os dados estão corretos? Se sim, insira " 1 ", se não, insira " 2 " e preencha novamente.' ))}}
    else{confirmaçãoDeDados = Number(prompt("Erro... Por favor, responda novamente. Nome: " + nome + ", idade: " + idade + ", salário: R$" + salárioBase + '. Os dados estão corretos? Se sim, insira " 1 ", se não, insira " 2 " e preencha novamente.' ))}  
} while (confirmaçãoDoWhile);

salárioBase = parseFloat(salárioBase)

let salárioBaseFixo = salárioBase
let valorDaPorcentagem = salárioBase * 0.000
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
let diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2024 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 0.015
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2025 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 0.030
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2026 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 0.060
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2027 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 0.120
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2028 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 0.240
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2029 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 0.480
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2030 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 0.960
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2031 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 1.920
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2032 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 3.840
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2033 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença)

valorDaPorcentagem = salárioBase * 7.680
salárioBase = salárioBase + valorDaPorcentagem
salárioBase = parseInt(salárioBase)
diferença = salárioBase - salárioBaseFixo
console.log("Ano: 2034 / Salário: R$" + salárioBase + " / Aumento em Relação ao salário base de R$" + diferença);