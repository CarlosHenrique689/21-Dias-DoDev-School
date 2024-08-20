let numeroEscolhido = Number(prompt('Olá! Seja bem vindo(a) ao gerador de tabuada! Insira um número positivo e inteiro para consultar sua tabuada.'))
let multiplicadorFinalEscolhido = Number(prompt('Insira o multiplicador final positivo e inteiro da sua tabuada, para definir onde ela deve terminar.'))

if(Number.isInteger(numeroEscolhido) && numeroEscolhido > 0)
    {if(Number.isInteger(multiplicadorFinalEscolhido) && multiplicadorFinalEscolhido > 0)
        {for(let contador = 1; contador <= multiplicadorFinalEscolhido; contador++)
        {console.log(numeroEscolhido + ' x ' + contador + ' = ' + numeroEscolhido*contador)}
     
        numeroEscolhido++
        console.log('Aqui está a tabuada do número seguinte ao escolhido, caso precise.')
     
        for(let contador = 1; contador <= multiplicadorFinalEscolhido; contador++)
        {console.log(numeroEscolhido + ' x ' + contador + ' = ' + numeroEscolhido*contador)}
     
        numeroEscolhido++
        console.log('E só por garantia, aqui está a tabuada do segundo número seguinte ao escolhido, caso precise.' )
     
        for(let contador = 1; contador <= multiplicadorFinalEscolhido; contador++)
        {console.log(numeroEscolhido + ' x ' + contador + ' = ' + numeroEscolhido*contador)}}
    else{console.log('Erro... Por favor, reinicie o gerador de tabuada e certifique-se de inserir números positivos e inteiros.')}}
else{console.log('Erro... Por favor, reinicie o gerador de tabuada e certifique-se de inserir números positivos e inteiros.')};