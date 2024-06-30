let nome = String(prompt('Qual o seu nome?'))
let idade = Number(prompt('Qual é a sua idade?'))
let possuiCarteira = Number(prompt('Você possui carteira de motorista? Digite "1" para SIM, ou "2" para NÃO.'))
let possuiCarro = Number(prompt('Você tem algum veículo? Digite "1" para SIM, ou "2" para NÃO.'))

if(idade < 18 || possuiCarteira === 2){console.log(nome + ', você não pode dirigir.')}
else if(possuiCarteira === 1 && possuiCarro === 1){console.log(nome + ', você será o motorista!')}
else{console.log(nome + ', você pode dirigir, mas não tem um carro.')};