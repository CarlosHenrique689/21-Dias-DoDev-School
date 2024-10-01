class Livro{
    Título
    Autor
    Editora
    Ano_De_Publicação
    Disponibilidade
    constructor(titulo, autor, editora, anoDePublicaçao, disponibilidade){
        this.Título = titulo
        this.Autor = autor
        this.Editora = editora
        this.Ano_De_Publicação = anoDePublicaçao
        this.Disponibilidade = disponibilidade
    }
};

let arrayLivros = [];
let livro;
let biblioteca;
let titulo;
let autor;
let editora;
let anoDePublicaçao;
let disponibilidade;
let nome;
let endereço;
let telefone;
let acervoDeLivros;
let salvarNomeLivro;
let encontrarLivro;
let guardarIndice;
let açaoDoUsuario;
let autorizaçaoWhile = true;

livro = new Livro(titulo = "O Tatuador de Auschwitz", autor = "Heather Morris", editora = "Planeta", anoDePublicaçao = "2019", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "O leopardo", autor = "Giuseppe Tomasi di Lampedusa", editora = "Companhia das Letras", anoDePublicaçao = "2017", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "Uma mulher no escuro", autor = "Raphael Montes", editora = "Companhia das Letras", anoDePublicaçao = "2019", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "Amor amargo", autor = "Jennifer Brown", editora = "Gutenberg", anoDePublicaçao = "2015", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "O sol ainda brilha", autor = "Anthony Ray Hinton", editora = "Vestígio", anoDePublicaçao = "2019", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "Boneco de pano", autor = "Daniel Cole", editora = "Arqueiro", anoDePublicaçao = "2017", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "Viagem de Cilka", autor = "Heather Morris", editora = "Planeta", anoDePublicaçao = "2020", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "A paciente silênciosa", autor = "Alex Michaelides", editora = "Record", anoDePublicaçao = "2019", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "Diário de uma escrava", autor = "Rô Mierling", editora = "Darkside", anoDePublicaçao = "2016", disponibilidade = "Disponível");arrayLivros.push(livro);
livro = new Livro(titulo = "A sede", autor = "Jo Nesbø", editora = "Record", anoDePublicaçao = "2018", disponibilidade = "Disponível");arrayLivros.push(livro);

class Biblioteca{
    Nome
    Endereço
    Telefone
    Acervo_De_Livros
    constructor(nome, endereço, telefone, acervoDeLivros){
        this.Nome = nome
        this.Endereço = endereço
        this.Telefone = telefone
        this.Acervo_De_Livros = acervoDeLivros
    }

    NomeLivroProcurar(){
        salvarNomeLivro = prompt("Qual o nome do livro que deseja procurar?")
        this.BuscarLivro(salvarNomeLivro)
    }

    BuscarLivro(salvarNomeLivro){
        encontrarLivro = arrayLivros.find(x => {return x.Título === salvarNomeLivro})
        if(encontrarLivro === undefined){
            console.log('Infelizmente o livro: "' + salvarNomeLivro +  '" não foi encontrado no nosso acervo.')
            console.log("")
        }
        else{titulo = encontrarLivro.Título
            autor = encontrarLivro.Autor
            editora = encontrarLivro.Editora
            anoDePublicaçao = encontrarLivro.Ano_De_Publicação
            disponibilidade = encontrarLivro.Disponibilidade
            
            console.log("Livro encontrado no nosso acervo!")
            console.log("")
            console.log("Título do livro: " + titulo)
            console.log("Autor(a) do livro: " + autor)
            console.log("Editora do livro: " + editora)
            console.log("Ano de publicação do livro: " + anoDePublicaçao)
            console.log("Disponibilidade do livro: " + disponibilidade)
            console.log("")
        }

        açaoDoUsuario = Number(prompt('Tentativa de busca realizada. Insira "1" para procurar um livro, "2" para ver todo nosso acervo de livros, ' +
            '"3" para fazer um empréstimo de um livro, "4" para fazer a devolução de um livro, "5" para finalizar o seu atendimento, ou "6" para ver as informações da biblioteca.'))
    }

    NomeLivroEmprestimo(){
        salvarNomeLivro = prompt("Qual o nome do livro que deseja fazer o empréstimo?")
        this.EmprestimoLivro(salvarNomeLivro)
    }

    EmprestimoLivro(salvarNomeLivro){
        encontrarLivro = arrayLivros.findIndex(x => {return x.Título === salvarNomeLivro})
        guardarIndice = encontrarLivro
        encontrarLivro = arrayLivros[encontrarLivro]
        if(encontrarLivro === undefined){
            console.log('Infelizmente o livro: "' + salvarNomeLivro +  '" não foi encontrado no nosso acervo.')
            console.log("")
        }
        else if(encontrarLivro.Disponibilidade === "Disponível"){
                console.log("Empréstimo feito com sucesso!")
                console.log("")
                encontrarLivro.Disponibilidade = "Indisponível"
                arrayLivros[guardarIndice] = encontrarLivro}
            else{console.log("Não é possível fazer o empréstimo, pois o livro está indisponível no momento.")
                 console.log("")
        }

        açaoDoUsuario = Number(prompt('Tentativa de empréstimo realizada. Insira "1" para procurar um livro, "2" para ver todo nosso acervo de livros, ' +
            '"3" para fazer um empréstimo de um livro, "4" para fazer a devolução de um livro, "5" para finalizar o seu atendimento, ou "6" para ver as informações da biblioteca.'))
    }


    NomeLivroDevoluçao(){
        salvarNomeLivro = prompt("Qual o nome do livro que deseja fazer a devolução?")
        this.DevoluçaoLivro(salvarNomeLivro)
    }

    DevoluçaoLivro(salvarNomeLivro){
        encontrarLivro = arrayLivros.findIndex(x => {return x.Título === salvarNomeLivro})
        guardarIndice = encontrarLivro
        encontrarLivro = arrayLivros[encontrarLivro]
        if(encontrarLivro === undefined){
            console.log('Infelizmente o livro: "' + salvarNomeLivro +  '" não foi encontrado no nosso acervo.')
            console.log("")
        }
        else if(encontrarLivro.Disponibilidade === "Indisponível"){
                console.log("Devolução feita com sucesso!")
                console.log("")
                encontrarLivro.Disponibilidade = "Disponível"
                arrayLivros[guardarIndice] = encontrarLivro}
            else{console.log("Não é possível fazer a devolução do livro, pois ele já existe na nossa biblioteca")
                 console.log("")
        }

        açaoDoUsuario = Number(prompt('Tentativa de devolução realizada. Insira "1" para procurar um livro, "2" para ver todo nosso acervo de livros, ' +
            '"3" para fazer um empréstimo de um livro, "4" para fazer a devolução de um livro, "5" para finalizar o seu atendimento, ou "6" para ver as informações da biblioteca.'))
    }
};

biblioteca = new Biblioteca("Biblioteca São Carlos", "Rua Fernando de Albuquerque 206", "1198293196", arrayLivros);

açaoDoUsuario = Number(prompt('Seja bem vindo a nossa biblioteca! Insira "1" para procurar um livro, "2" para ver todo nosso acervo de livros, ' +
    '"3" para fazer um empréstimo de um livro, "4" para fazer a devolução de um livro, "5" para finalizar o seu atendimento, ou "6" para ver as informações da biblioteca.'));


while(autorizaçaoWhile){
    switch(açaoDoUsuario){

        case 1: 
            biblioteca.NomeLivroProcurar()
            break;

        case 2: 
            console.log(arrayLivros)
            console.log("")

            açaoDoUsuario = Number(prompt('Acervo de livros exibido com sucesso! Insira "1" para procurar um livro, "2" para ver todo nosso acervo de livros, ' +
                '"3" para fazer um empréstimo de um livro, "4" para fazer a devolução de um livro, "5" para finalizar o seu atendimento, ou "6" para ver as informações da biblioteca.'))
            break;

        case 3:
            biblioteca.NomeLivroEmprestimo()
            break;

        case 4:
            biblioteca.NomeLivroDevoluçao()
            break;

        case 5:
            console.log("Muito obrigado e volte sempre!")
            autorizaçaoWhile = false
            break;

        case 6:
            console.log("Informações da biblioteca.")
            console.log("")
            console.log("Nome da biblioteca: " + biblioteca.Nome)
            console.log("Endereço: " + biblioteca.Endereço)
            console.log("Telefone: " + biblioteca.Telefone)
            console.log("")

            açaoDoUsuario = Number(prompt('Informações da biblioteca exibidas com sucesso! Insira "1" para procurar um livro, "2" para ver todo nosso acervo de livros, ' +
                '"3" para fazer um empréstimo de um livro, "4" para fazer a devolução de um livro, "5" para finalizar o seu atendimento, ou "6" para ver as informações da biblioteca.'))
            break;

        default:
            açaoDoUsuario = Number(prompt('Erro... Responda novamente. Insira "1" para procurar um livro, "2" para ver todo nosso acervo de livros, ' +
                '"3" para fazer um empréstimo de um livro, "4" para fazer a devolução de um livro, "5" para finalizar o seu atendimento, ou "6" para ver as informações da biblioteca.'))
            break;
    }
};