let arrayModelos = [];
let arrayAno = [];
let arrayValores = [];
let arrayValoresFormat = [];
let preArrayValores = undefined;
let indiceModelos = 0;
let indiceAno = 0;
let indiceValores = 0;
let qtdDeCarros = 1;
let confirmaçãoWhile = true;
let confirmaçãoWhileGlobal = true;
let confirmaçãoDeResposta = undefined;
let VB1 = undefined;
let VB2 = undefined;
let VT = undefined;

while(confirmaçãoWhileGlobal){
    arrayModelos[indiceModelos] = String(prompt("Qual o modelo do " + qtdDeCarros + "º carro que deseja cadastar?"));
    confirmaçãoDeResposta = Number(prompt('O modelo do ' + qtdDeCarros + 'º carro: "' + arrayModelos[indiceModelos] + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'));
    
    while(confirmaçãoWhile){
        if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
            if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{arrayModelos[indiceModelos] = String(prompt("Qual o modelo do " + qtdDeCarros + "º carro que deseja cadastar?"))
                confirmaçãoDeResposta = Number(prompt('O modelo do ' + qtdDeCarros + 'º carro: "' + arrayModelos[indiceModelos] + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda de forma coerente. O modelo do ' + qtdDeCarros + 'º carro: "' + arrayModelos[indiceModelos] + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}};

    confirmaçãoWhile = true;

    arrayAno[indiceAno] = String(prompt("Qual o ano do " + arrayModelos[indiceModelos] + "?"));
    confirmaçãoDeResposta = Number(prompt('O ano do ' + arrayModelos[indiceModelos] + ' ano: "' + arrayAno[indiceAno] + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'));

    while(confirmaçãoWhile){
        if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
            if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{arrayAno[indiceAno] = String(prompt("Qual o ano do " + arrayModelos[indiceModelos] + "?"))
                confirmaçãoDeResposta = Number(prompt('O ano do ' + arrayModelos[indiceModelos] + ' ano: "' + arrayAno[indiceAno] + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda de forma coerente. O ano do ' + arrayModelos[indiceModelos] + ' ano: "' + arrayAno[indiceAno] + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}};

    confirmaçãoWhile = true;

    preArrayValores = String(prompt("Qual o valor em R$ do " + arrayModelos[indiceModelos] + " ano: " + arrayAno[indiceAno] + "?"));
    preArrayValores = preArrayValores.replaceAll(".", "");
    preArrayValores = preArrayValores.replaceAll(",", ".");
    preArrayValores = parseFloat(preArrayValores);
    arrayValores[indiceValores] = preArrayValores;
    preArrayValores = preArrayValores.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    confirmaçãoDeResposta = Number(prompt('O valor do ' + arrayModelos[indiceModelos] + ' ano: ' + arrayAno[indiceAno] + ' valor: "' + preArrayValores + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'));           

    while(confirmaçãoWhile){
        if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
            if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{preArrayValores = String(prompt("Qual o valor em R$ do " + arrayModelos[indiceModelos] + " ano: " + arrayAno[indiceAno] + "?"))
                preArrayValores = preArrayValores.replaceAll(".", "")
                preArrayValores = preArrayValores.replaceAll(",", ".")
                preArrayValores = parseFloat(preArrayValores)
                arrayValores[indiceValores] = preArrayValores
                preArrayValores = preArrayValores.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                confirmaçãoDeResposta = Number(prompt('O valor do ' + arrayModelos[indiceModelos] + ' ano: ' + arrayAno[indiceAno] + ' valor: "' + preArrayValores + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda de forma coerente. O valor do ' + arrayModelos[indiceModelos] + ' ano: ' + arrayAno[indiceAno] + ' valor: "' + preArrayValores + '" está correto? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}};

    confirmaçãoWhile = true;

    confirmaçãoWhileGlobal = Number(prompt('Você deseja cadastrar outro veículo? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'));
    
    while(confirmaçãoWhile){
        if(confirmaçãoWhileGlobal === 1 || confirmaçãoWhileGlobal === 2){
            if(confirmaçãoWhileGlobal === 1){confirmaçãoWhileGlobal = true; confirmaçãoWhile = false}
            else{confirmaçãoWhileGlobal = false; confirmaçãoWhile = false}}
        else{confirmaçãoWhileGlobal = Number(prompt('Erro... Responda de forma coerente. Você deseja cadastrar outro veículo? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}};

    confirmaçãoWhile = true;

    indiceModelos++;
    indiceAno++;
    indiceValores++;
    qtdDeCarros++;};

for(let contador = 0; contador < arrayValores.length; contador++){
    arrayValoresFormat[contador] = arrayValores[contador].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};

for(contador = 0; contador < qtdDeCarros - 1; contador++){
    console.log("Carro: " + arrayModelos[contador] + " Ano: " + arrayAno[contador] + " Valor: " + arrayValoresFormat[contador])};
    
console.log("LISTA DOS CARROS CADASTRADOS EM ORDEM CRESCENTE DE ACORDO COM O VALOR DE TODOS ELES.");

for(VB1 = -1; VB1 < arrayValores.length - 1; VB1++){
    for(VB2 = -1; VB2 < arrayValores.length - 1; VB2++){
        if(arrayValores[VB2] > arrayValores[VB2 + 1]){

            VT = arrayValores[VB2]
            arrayValores[VB2] = arrayValores[VB2 + 1]
            arrayValores[VB2 + 1] = VT;

            VT = arrayModelos[VB2]
            arrayModelos[VB2] = arrayModelos[VB2 + 1]
            arrayModelos[VB2 + 1] = VT;
            
            VT = arrayAno[VB2]
            arrayAno[VB2] = arrayAno[VB2 + 1]
            arrayAno[VB2 + 1] = VT}}};

for(contador = 0; contador < arrayValores.length; contador++){
    arrayValoresFormat[contador] = arrayValores[contador].toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})};

for(contador = 0; contador < qtdDeCarros - 1; contador++){
    console.log("Carro: " + arrayModelos[contador] + " Ano: " + arrayAno[contador] + " Valor: " + arrayValoresFormat[contador])};