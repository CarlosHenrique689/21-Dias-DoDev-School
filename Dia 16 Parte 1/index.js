let arrayNomes = [];
let arraySenhas = [];
let indiceNomes = 0;
let indiceSenhas = 0;
let açaoDoUsuario = undefined;
let confirmaçaoDeResposta = undefined;
let loginNome = undefined;
let loginSenha = undefined;
let excluirUsuario = undefined;
let confirmaçaoWhile = true;
let confirmaçaoWhileGlobal = true;

function primeiraEscolhaDoUsuario(){
    açaoDoUsuario = Number(prompt('Bem vindo a DoDev School! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))
    return açaoDoUsuario
};

function escolhaCadastro(){
    arrayNomes[indiceNomes] = String(prompt("Qual o NOME do novo usuário?"))
    confirmaçaoDeResposta = Number(prompt('O NOME: "' + arrayNomes[indiceNomes] + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))
    
    while(confirmaçaoWhile){
        if(confirmaçaoDeResposta === 1 || confirmaçaoDeResposta === 2){
            if(confirmaçaoDeResposta === 1){confirmaçaoWhile = false}
            else{arrayNomes[indiceNomes] = String(prompt("Qual o NOME do novo usuário?"))
                confirmaçaoDeResposta = Number(prompt('O NOME: "' + arrayNomes[indiceNomes] + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçaoDeResposta = Number(prompt('Erro... Responda novamente. O NOME: "' + arrayNomes[indiceNomes] + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçaoWhile = true

    arraySenhas[indiceSenhas] = String(prompt("Crie uma SENHA para o novo usuário."))
    confirmaçaoDeResposta = Number(prompt('A SENHA: "' + arraySenhas[indiceSenhas] + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))

    while(confirmaçaoWhile){
        if(confirmaçaoDeResposta === 1 || confirmaçaoDeResposta === 2){
            if(confirmaçaoDeResposta === 1){confirmaçaoWhile = false}
            else{arraySenhas[indiceSenhas] = String(prompt("Crie uma SENHA para o novo usuário."))
            confirmaçaoDeResposta = Number(prompt('A SENHA: "' + arraySenhas[indiceSenhas] + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçaoDeResposta = Number(prompt('Erro... Responda novamente. A SENHA: "' + arraySenhas[indiceSenhas] + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçaoWhile = true

    açaoDoUsuario = Number(prompt('CADASTRO efetuado com SUCESSO! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))
    indiceNomes++
    indiceSenhas++
};

function escolhaLogin(){
    loginNome = String(prompt("Insira o NOME do usuário."))
    confirmaçaoDeResposta = Number(prompt('O NOME de usuário: "' + loginNome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))

    while(confirmaçaoWhile){
        if(confirmaçaoDeResposta === 1 || confirmaçaoDeResposta === 2){
            if(confirmaçaoDeResposta === 1){confirmaçaoWhile = false}
            else{loginNome = String(prompt("Insira o NOME do usuário."))
                confirmaçaoDeResposta = Number(prompt('O NOME de usuário: "' + loginNome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçaoDeResposta = Number(prompt('Erro... Responda novamente. O NOME de usuário: "' + loginNome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçaoWhile = true

    loginSenha = String(prompt("Insira a SENHA do usuário."))
    confirmaçaoDeResposta = Number(prompt('A SENHA do usuário: "' + loginSenha + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))

    while(confirmaçaoWhile){
        if(confirmaçaoDeResposta === 1 || confirmaçaoDeResposta === 2){
            if(confirmaçaoDeResposta === 1){confirmaçaoWhile = false}
            else{loginSenha = String(prompt("Insira a SENHA do usuário."))
                confirmaçaoDeResposta = Number(prompt('A SENHA do usuário: "' + loginSenha + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçaoDeResposta = Number(prompt('Erro... Responda novamente. A SENHA do usuário: "' + loginSenha + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçaoWhile = true

    loginNome = arrayNomes.indexOf(loginNome);
    loginSenha = arraySenhas.indexOf(loginSenha);

    if(loginNome != -1 && loginSenha != -1){
        if(loginNome === loginSenha){açaoDoUsuario = Number(prompt('LOGIN efetuado com SUCESSO! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN com outro usuário. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))}
        else{açaoDoUsuario = Number(prompt('Falha na tentativa de LOGIN. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))}}
    else{açaoDoUsuario = Number(prompt('Falha na tentativa de LOGIN. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))}
};

function escolhaExclusao(){
    excluirUsuario = String(prompt("Insira o NOME do usuário que deseja EXCLUIR."))
    confirmaçaoDeResposta = Number(prompt('O NOME de usuário: "' + excluirUsuario + '" que deseja EXCLUIR está correto? Insira "1" para SIM, ou "2" para NÃO.'))

    while(confirmaçaoWhile){
        if(confirmaçaoDeResposta === 1 || confirmaçaoDeResposta === 2){
            if(confirmaçaoDeResposta === 1){confirmaçaoWhile = false}
            else{excluirUsuario = String(prompt("Insira o NOME do usuário que deseja EXCLUIR."))
                confirmaçaoDeResposta = Number(prompt('O NOME de usuário: "' + excluirUsuario + '" que deseja EXCLUIR está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçaoDeResposta = Number(prompt('Erro... Responda novamente. O NOME de usuário: "' + excluirUsuario + '" que deseja EXCLUIR está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçaoWhile = true

    excluirUsuario = arrayNomes.indexOf(excluirUsuario);

    if(excluirUsuario != -1){arrayNomes.splice(excluirUsuario, 1); arraySenhas.splice(excluirUsuario, 1); indiceNomes--; indiceSenhas--;
        açaoDoUsuario = Number(prompt('Cadastro EXCLUIDO com SUCESSO! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR outro cadastro. Ou "4" para ENCERRAR o programa.'))}                               
    else{açaoDoUsuario = Number(prompt('Falha na tentativa de EXCLUIR cadastro. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))}
};

primeiraEscolhaDoUsuario();

while(confirmaçaoWhileGlobal){   
    switch(açaoDoUsuario){
        case 1:
            escolhaCadastro()
            break;

        case 2:
            escolhaLogin()
            break;

        case 3:
            escolhaExclusao()
            break;

        case 4:
            confirmaçaoWhileGlobal = false
            console.log("Programa encerrado.")
            break;

        default:
            açaoDoUsuario = Number(prompt('Erro... Responda novamente. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))
            break;
    }
};