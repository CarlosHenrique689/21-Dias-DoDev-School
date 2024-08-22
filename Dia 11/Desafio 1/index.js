let arrayNomes = [];
let arrayNotas = [];
let indiceNomes = 0;
let indiceNotas = 0;
let alunoDaVez = 1;
let somaDasNotas = 0;
let confirmaçãoDoWhile = undefined;
let confirmaçãoWhile = undefined;
let confirmaçãoDeResposta = undefined;
let médiaGeral = undefined;

do {
    arrayNomes[indiceNomes] = String(prompt("Insira o nome do(a) " + alunoDaVez + "º aluno(a)."));
    confirmaçãoDeResposta = Number(prompt('O nome do(a) ' + alunoDaVez + 'º aluno(a) está correto? "' + arrayNomes[indiceNomes] + '". Se SIM, Insira " 1 ", se NÃO, insira " 2 ".' ));

    confirmaçãoWhile = true;

    while(confirmaçãoWhile)
        {if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2)
            {if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{arrayNomes[indiceNomes] = String(prompt("Insira o nome do(a) " + alunoDaVez + "º aluno(a)."))
                confirmaçãoDeResposta = Number(prompt('O nome do(a) ' + alunoDaVez + 'º aluno(a) está correto? "' + arrayNomes[indiceNomes] + '". Se SIM, Insira " 1 ", se NÃO insira " 2 ".' ))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda de forma coerente. O nome do(a) ' + alunoDaVez + 'º aluno(a) está correto? "' + arrayNomes[indiceNomes] + '". Se SIM, Insira " 1 ", se NÃO, insira " 2 ".' ))}};


    arrayNotas[indiceNotas] = parseFloat(prompt("Insira a nota do(a) " + alunoDaVez + "º aluno(a)."));
    confirmaçãoDeResposta = Number(prompt('A nota do(a) ' + alunoDaVez + 'º aluno(a) está correto? "' + arrayNotas[indiceNotas] + '". Se SIM, Insira " 1 ", se NÃO, insira " 2 ".' ));

    confirmaçãoWhile = true;

    while(confirmaçãoWhile)
        {if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2)
            {if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{arrayNotas[indiceNotas] = parseFloat(prompt("Insira a nota do(a) " + alunoDaVez + "º aluno(a)."))
                confirmaçãoDeResposta = Number(prompt('A nota do(a) ' + alunoDaVez + 'º aluno(a) está correto? "' + arrayNotas[indiceNotas] + '". Se SIM, Insira " 1 ", se NÃO insira " 2 ".' ))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda de forma coerente. A nota do(a) ' + alunoDaVez + 'º aluno(a) está correto? "' + arrayNotas[indiceNotas] + '". Se SIM, Insira " 1 ", se NÃO, insira " 2 ".' ))}};           

    somaDasNotas = somaDasNotas + arrayNotas[indiceNotas]
    
    indiceNomes++;
    indiceNotas++;
    alunoDaVez++;

    confirmaçãoDoWhile = Number(prompt('Você deseja cadastrar a nota de mais alunos(as)? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'));

    confirmaçãoWhile = true;

    while(confirmaçãoWhile)
        {if(confirmaçãoDoWhile === 1 || confirmaçãoDoWhile === 2)
            {if(confirmaçãoDoWhile === 1){confirmaçãoDoWhile = true; confirmaçãoWhile = false}
            else{confirmaçãoDoWhile = false; confirmaçãoWhile = false}}
        else{confirmaçãoDoWhile = Number(prompt('Erro... Responda de forma coerente. Você deseja cadastrar a nota de mais alunos(as)? Se SIM, insira " 1 ", se NÃO, insira " 2 ".'))}};
} while (confirmaçãoDoWhile);

for(let contador = 0; contador < alunoDaVez - 1; contador++){
    console.log("Aluno(a): " + arrayNomes[contador] + " / Nota: " + arrayNotas[contador])};

médiaGeral = somaDasNotas / alunoDaVez;

console.log("A soma total de todas as notas cadastradas é de: " + somaDasNotas.toFixed(2));
console.log("A média geral dos(as) alunos(as) cadastrados(as) é de: " + médiaGeral.toFixed(2));