// PARTE 1 DO DESAFIO 1!
console.log('PARTE 1 DO DESAFIO 1!')


let numeroEscolhido = Number(prompt('Por favor, escolha um número positivo e inteiro qualquer.'))

if(Number.isInteger(numeroEscolhido))
    {if(numeroEscolhido >= 0){for(let contador1 = 0; contador1 <= numeroEscolhido; contador1++){console.log(contador1)}}
    else{console.log('Erro... Por favor, tente novamnete inserindo um número positivo e inteiro.')}}
else{console.log('Erro... Por favor, tente novamnete inserindo um número positivo e inteiro.')};


// PARTE 2 DO DESAFIO 1!
console.log('PARTE 2 DO DESAFIO 1!')


for(let contador2 = 0; contador2 <= 50; contador2 += 5){console.log(contador2)};


// PARTE 3 DO DESAFIO 1!
console.log('PARTE 3 DO DESAFIO 1!')


for(let contador3 = 50; contador3 >= 0; contador3 -= 5){console.log(contador3)};