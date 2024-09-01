let arrayNomes = [];
let arraySenhas = [];
let indiceNomes = 0;
let indiceSenhas = 0;
let confirmaçãoWhile = true;
let confirmaçãoWhileGlobal = true;
let confirmaçãoDeResposta = undefined;
let escolhaDeAçãoDoUsuário = undefined;
let loginNome = undefined;
let loginSenha = undefined;
let excluirUsuário = undefined;

escolhaDeAçãoDoUsuário = Number(prompt('Bem vindo a DoDev School! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'));

while(confirmaçãoWhileGlobal){
    switch(escolhaDeAçãoDoUsuário){

        case 1:
            arrayNomes[indiceNomes] = String(prompt("Qual o NOME do novo usuário?"));
            confirmaçãoDeResposta = Number(prompt('O NOME: "' + arrayNomes[indiceNomes] + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'));
        
            while(confirmaçãoWhile){
                if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
                    if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
                    else{arrayNomes[indiceNomes] = String(prompt("Qual o NOME do novo usuário?"))
                        confirmaçãoDeResposta = Number(prompt('O NOME: "' + arrayNomes[indiceNomes] + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
                else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. O NOME: "' + arrayNomes[indiceNomes] + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};

            confirmaçãoWhile = true;

            arraySenhas[indiceSenhas] = String(prompt("Crie uma SENHA para o novo usuário."));
            confirmaçãoDeResposta = Number(prompt('A SENHA: "' + arraySenhas[indiceSenhas] + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'));

            while(confirmaçãoWhile){
                if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
                    if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
                    else{arraySenhas[indiceSenhas] = String(prompt("Crie uma SENHA para o novo usuário."))
                    confirmaçãoDeResposta = Number(prompt('A SENHA: "' + arraySenhas[indiceSenhas] + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
                else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A SENHA: "' + arraySenhas[indiceSenhas] + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}};

            confirmaçãoWhile = true;

            escolhaDeAçãoDoUsuário = Number(prompt('CADASTRO efetuado com SUCESSO! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'));    

            indiceNomes++;
            indiceSenhas++;
            break;
            
        case 2:
            loginNome = String(prompt("Insira o NOME do usuário."));
            confirmaçãoDeResposta = Number(prompt('O NOME de usuário: "' + loginNome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'));

            while(confirmaçãoWhile){
                if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
                    if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
                    else{loginNome = String(prompt("Insira o NOME do usuário."))
                        confirmaçãoDeResposta = Number(prompt('O NOME de usuário: "' + loginNome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
                else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. O NOME de usuário: "' + loginNome + '" está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};

            confirmaçãoWhile = true;

            loginSenha = String(prompt("Insira a SENHA do usuário."));
            confirmaçãoDeResposta = Number(prompt('A SENHA do usuário: "' + loginSenha + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'));
            
            while(confirmaçãoWhile){
                if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
                    if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
                    else{loginSenha = String(prompt("Insira a SENHA do usuário."))
                        confirmaçãoDeResposta = Number(prompt('A SENHA do usuário: "' + loginSenha + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
                else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A SENHA do usuário: "' + loginSenha + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}};

            confirmaçãoWhile = true;

            loginNome = arrayNomes.indexOf(loginNome);
            loginSenha = arraySenhas.indexOf(loginSenha);

            if(loginNome != -1 && loginSenha != -1){
                if(loginNome === loginSenha){escolhaDeAçãoDoUsuário = Number(prompt('LOGIN efetuado com SUCESSO! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN com outro usuário. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))}
                else{escolhaDeAçãoDoUsuário = Number(prompt('Falha na tentativa de LOGIN. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))}}
            else{escolhaDeAçãoDoUsuário = Number(prompt('Falha na tentativa de LOGIN. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))};
            break;

        case 3:
            excluirUsuário = String(prompt("Insira o NOME do usuário que deseja EXCLUIR."));
            confirmaçãoDeResposta = Number(prompt('O NOME de usuário: "' + excluirUsuário + '" que deseja EXCLUIR está correto? Insira "1" para SIM, ou "2" para NÃO.')); 

            while(confirmaçãoWhile){
                if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
                    if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
                    else{excluirUsuário = String(prompt("Insira o NOME do usuário que deseja EXCLUIR."))
                        confirmaçãoDeResposta = Number(prompt('O NOME de usuário: "' + excluirUsuário + '" que deseja EXCLUIR está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
                else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. O NOME de usuário: "' + excluirUsuário + '" que deseja EXCLUIR está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};

            confirmaçãoWhile = true;

            excluirUsuário = arrayNomes.indexOf(excluirUsuário);

            if(excluirUsuário != -1){arrayNomes.splice(arrayNomes[excluirUsuário], 1); arraySenhas.splice(arraySenhas[excluirUsuário], 1); indiceNomes--; indiceSenhas--;
                escolhaDeAçãoDoUsuário = Number(prompt('Cadastro EXCLUIDO com SUCESSO! Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR outro cadastro. Ou "4" para ENCERRAR o programa.'))}                               
            else{escolhaDeAçãoDoUsuário = Number(prompt('Falha na tentativa de EXCLUIR cadastro. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'))};
            break;
                        
        case 4:
            confirmaçãoWhileGlobal = false;
            break;

        default:
            escolhaDeAçãoDoUsuário = Number(prompt('Erro... Responda novamente. Insira "1" para CADASTRAR um novo usuário. "2" para fazer LOGIN. "3" para EXCLUIR um cadastro. Ou "4" para ENCERRAR o programa.'));
            break;}};