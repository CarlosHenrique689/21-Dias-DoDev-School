let senteFome = Number(prompt('Você está com fome? Digite "1" para SIM, ou "2" para NÃO.'))
let temDinheiro = Number(prompt('Você tem dinheiro? Digite "1" para SIM, ou "2" para NÃO.'))
let restauranteAbertoOuFechado = undefined

if(senteFome === 1 || senteFome === 2)
    {if(temDinheiro === 1 || temDinheiro === 2)
        {if(senteFome === 2 || temDinheiro === 2){console.log('Hoje a janta será em casa.')}
        else if(true){restauranteAbertoOuFechado = Number(prompt('O restaurante que você quer ir está aberto? Digite "1" para SIM, ou "2" para NÃO.'))
            if(restauranteAbertoOuFechado === 1 || restauranteAbertoOuFechado === 2)
                {if(temDinheiro === 1 && restauranteAbertoOuFechado === 1){console.log('Hoje o jantar será no seu restaurante preferido!')}
                else{console.log('Peça um delivery!')}}
            else{console.log('Erro... Por favor, tente novamente usando "1" para SIM, ou "2" para NÃO.')}}}            
    else{console.log('Erro... Por favor, tente novamente usando "1" para SIM, ou "2" para NÃO.')}}
else{console.log('Erro... Por favor, tente novamente usando "1" para SIM, ou "2" para NÃO.')};