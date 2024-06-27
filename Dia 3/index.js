let nome = String(prompt('Por favor, digite o seu nome. EX: "Lucas Perreira da Silva"'))
let idade = parseInt(prompt('Por favor, digite a sua idade. EX: "23"'))
let altura = parseFloat(prompt('Por favor, digite a sua altura. EX: "1.75"'))
let peso = parseInt(prompt('Por favor, digite o seu peso. EX: "72Kg"'))

let anoDeNascimento = 2023-idade
let IMC = parseInt(peso / (altura * altura))

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, nasceu em ' 
+ anoDeNascimento + ', tem ' + altura + ' de altura, pesa ' + peso + 'Kg, e seu IMC é de ' + IMC + 'Kg/m2.')