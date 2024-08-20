let condiçãoWhile = "S"
let nota = undefined
let sexo = undefined
let mediaGeral = undefined
let quantidadeTotalDeAlunos = 0
let quantosHomensEnviaramNotas = 0
let quanatasMulheresTiveramNotaAcimaDe7 = 0
let maiorNotaEntreHomens = 0
let somaDeTodasAsNotas = 0
let autenticaçãoDaCondiçãoWhile = undefined

while(condiçãoWhile === "S")
    {sexo = String(prompt('insira o Sexo do(a) aluno(a) com "M" para Masculino, ou "F" para Feminino. (Alunos cadastrados até o momento: ' + quantidadeTotalDeAlunos + ').'))
    nota = Number(prompt('Insira a Nota do(a) aluno(a).'))
    autenticaçãoDaCondiçãoWhile = true

    switch(sexo){
        
        case "M":
            if(nota >= 0 && nota <= 10)
                {somaDeTodasAsNotas += nota
                quantosHomensEnviaramNotas++
                quantidadeTotalDeAlunos++
                if(nota > maiorNotaEntreHomens){maiorNotaEntreHomens = nota}
                condiçãoWhile = String(prompt('Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))
                while(autenticaçãoDaCondiçãoWhile)
                    {if(condiçãoWhile === "S" || condiçãoWhile === "N"){autenticaçãoDaCondiçãoWhile = false}
                    else{condiçãoWhile = String(prompt('Erro... Por favor, responda de forma coerente. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))}}
                    break;}
            else{condiçãoWhile = String(prompt('Erro no cadastro da NOTA do aluno(a), informações não cadastradas. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))
                while(autenticaçãoDaCondiçãoWhile)
                    {if(condiçãoWhile === "S" || condiçãoWhile === "N"){autenticaçãoDaCondiçãoWhile = false}
                    else{condiçãoWhile = String(prompt('Erro... Por favor, responda de forma coerente. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))}}
                    break;}

        case "F":
            if(nota >= 0 && nota <= 10)
                {somaDeTodasAsNotas += nota
                quantidadeTotalDeAlunos++
                if(nota > 7){quanatasMulheresTiveramNotaAcimaDe7++}
                condiçãoWhile = String(prompt('Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))
                while(autenticaçãoDaCondiçãoWhile)
                    {if(condiçãoWhile === "S" || condiçãoWhile === "N"){autenticaçãoDaCondiçãoWhile = false}
                    else{condiçãoWhile = String(prompt('Erro... Por favor, responda de forma coerente. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))}}
                    break;}
            else{condiçãoWhile = String(prompt('Erro no cadastro da NOTA do aluno(a), informações não cadastradas. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))
                while(autenticaçãoDaCondiçãoWhile)
                    {if(condiçãoWhile === "S" || condiçãoWhile === "N"){autenticaçãoDaCondiçãoWhile = false}
                    else{condiçãoWhile = String(prompt('Erro... Por favor, responda de forma coerente. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))}}
                    break;}

        default: condiçãoWhile = String(prompt('Erro no cadastro do SEXO do aluno(a), informações não cadastradas. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))
            while(autenticaçãoDaCondiçãoWhile)
                {if(condiçãoWhile === "S" || condiçãoWhile === "N"){autenticaçãoDaCondiçãoWhile = false}
                else{condiçãoWhile = String(prompt('Erro... Por favor, responda de forma coerente. Caso queira cadastrar as informações de outro(a) aluno(a), insira "S" para SIM, ou "N" para NÃO.'))}}
                break;}};

mediaGeral = somaDeTodasAsNotas / quantidadeTotalDeAlunos

console.log('A média geral dos alunos é: ' + mediaGeral)
console.log('A quantidade de homens que enviaram as notas é: ' + quantosHomensEnviaramNotas)
console.log('A quantidade de mulheres que tiveram nota acima de 7 é: ' + quanatasMulheresTiveramNotaAcimaDe7)
console.log('A maior nota entre os homens é: ' + maiorNotaEntreHomens);