///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!

let numeroPrimario = undefined
let numeroSecundario = undefined

function Calculadora(numeroPrimario, numeroSecundario, operador){

  numeroPrimario = parseFloat(numeroPrimario)
  numeroSecundario = parseFloat(numeroSecundario)

  switch(operador){

    case "+": 
      let resultadoAdição = numeroPrimario + numeroSecundario
      if(resultadoAdição <= 1000000 && resultadoAdição >= -1000000){return resultadoAdição}
      else{return "ERRO."}
      
    case "-":
      let resultadoSubtração = numeroPrimario - numeroSecundario
      if(resultadoSubtração <= 1000000 && resultadoSubtração >= -1000000){return resultadoSubtração}
      else{return "ERRO."}

    case "*":
      let resultadoMultipicação = numeroPrimario * numeroSecundario
      if(resultadoMultipicação <= 1000000 && resultadoMultipicação >= -1000000){return resultadoMultipicação}
      else{return "ERRO."}

    case "/":
      let resultadoDivisão = numeroPrimario / numeroSecundario
      if(resultadoDivisão <= 1000000 && resultadoDivisão >= -1000000){return resultadoDivisão}
      else{return "ERRO."}

    case "e":
      let resultadoElevação = undefined
      let valorMultiplicado = numeroPrimario
      for(let contador = 1; contador < numeroSecundario; contador++){resultadoElevação = valorMultiplicado * numeroPrimario; valorMultiplicado = resultadoElevação}
      if(resultadoElevação <= 1000000 && resultadoElevação >= -1000000){return resultadoElevação}
      else{return "ERRO."}

    default: return "ERRO."};};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0.0-9]/)
  let operadores = visor.value.split(/[0.0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}