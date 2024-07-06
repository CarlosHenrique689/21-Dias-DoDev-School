let nome = String(prompt('Qual o seu nome?'))
let idade = parseInt(prompt('Qual é a sua idade?'))
let possuiCarteira = undefined
let possuiCarro = undefined

if(isNaN(idade)){console.log('Ops, ouve algum erro com a sua IDADE. Por favor, Reinicie e tente novamente.')}
else if(true){possuiCarteira = Number(prompt('Você possui carteira de motorista? Digite "1" para SIM, ou "2" para NÃO.'))
    if(possuiCarteira === 1 || possuiCarteira === 2)
        {if(true){possuiCarro = Number(prompt('Você tem algum veículo? Digite "1" para SIM, ou "2" para NÃO.'))
            if(possuiCarro === 1 || possuiCarro === 2)
                {if(idade < 18 || possuiCarteira === 2){console.log(nome + ', você não pode dirigir.')}
                else if(possuiCarteira === 1 && possuiCarro === 1){console.log(nome + ', você será o motorista!')}
                else{console.log(nome + ', você pode dirigir, mas não tem um carro.')}}
            else{console.log('Ops, ouve algum erro. Por favor, reinicie e tente novamente usando "1" para SIM, ou "2" para NÃO.')}}}
    else{console.log('Ops, ouve algum erro. Por favor, reinicie e tente novamente usando "1" para SIM, ou "2" para NÃO.')}};