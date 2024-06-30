let senteFome = Number(prompt('Você está com fome? Digite "1" para SIM, ou "2" para NÃO.'))
let temDinheiro = Number(prompt('Você tem dinheiro? Digite "1" para SIM, ou "2" para NÃO.'))

if(senteFome === 2 || temDinheiro === 2){console.log('Hoje a janta será em casa.')}
else if(true){let restauranteAbertoOuFechado = Number(prompt('O restaurante que você quer ir está aberto? Digite "1" para SIM, ou "2" para NÃO.'))
if(temDinheiro === 1 && restauranteAbertoOuFechado === 1){console.log('Hoje o jantar será no seu restaurante preferido!')}
else{console.log('Peça um delivery!')}};