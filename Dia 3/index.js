let nome = String(prompt('Por favor, digite o seu nome.'))
let idade = parseInt(prompt('Por favor, digite a sua idade.'))
let altura = Number(prompt('Por favor, digite a sua altura. (Use Ponto ao invés de vírgula.)'))
let peso = parseInt(prompt('Por favor, digite o seu peso.'))

if(isNaN(idade)){console.log('Ops, ouve algum erro no campo de "Digitar sua idade". Por favor, volte e tente novamente.')}
    else if(isNaN(altura)){console.log('Ops, Ouve algum erro no campo de "Digitar sua altura". Por favor, volte e tente novamente.')}
        else if(isNaN(peso)){console.log('Ops, Ouve algum erro no campo de "Digitar seu peso". Por favor, volte e tente novamente.')}
            else{let anoDeNascimento = 2023-idade
                 let IMC = parseInt(peso / (altura * altura))

                 console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' + anoDeNascimento +
                 ', tem ' + altura + ' de altura, pesa ' + peso + 'Kg, e seu IMC é de ' + IMC + 'Kg/m2.')};