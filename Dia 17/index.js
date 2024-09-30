class Hotel{
    _1_Nome_Hotel
    _2_Categoria
    _3_Endereço
    _4_Telefone
    _5_Id_Hotel
    constructor(nomeHotel, categoria, endereço, telefone, idHotel){
        this._1_Nome_Hotel = nomeHotel
        this._2_Categoria = categoria
        this._3_Endereço = endereço
        this._4_Telefone = telefone
        this._5_Id_Hotel = idHotel
    }
};

class Reserva{
    _1_Nome_Responsável
    _2_Id_Reserva
    _3_Id_Hotel
    _4_Dia_Entrada
    _5_Dia_Saída
    constructor(nomeResponsavel, idReserva, idHotel, diaEntrada, diaSaida){
        this._1_Nome_Responsável = nomeResponsavel
        this._2_Id_Reserva = idReserva
        this._3_Id_Hotel = idHotel
        this._4_Dia_Entrada = diaEntrada
        this._5_Dia_Saída = diaSaida
    }
};

let arrayHoteis = [];
let arrayReservas = [];
let hotel;
let reserva;
let idHotel;
let nomeHotel;
let categoria;
let endereço;
let telefone;
let idReserva;
let nomeResponsavel;
let diaEntrada;
let diaSaida;
let mesEntrada;
let mesSaida;
let confirmaçaoResposta;
let autorizaçaoWhile = true;

function CadastrarHotel(){
    nomeHotel = prompt("Qual o nome do seu Hotel?")

    while(autorizaçaoWhile){
        if(arrayHoteis.find(x => {return x._1_Nome_Hotel === nomeHotel})){nomeHotel = prompt("Nome de Hotel já existente. Insira outro nome para seu hotel.")}
        else{autorizaçaoWhile = false}
    }autorizaçaoWhile = true

    idHotel = Number(prompt("Qual o ID do seu Hotel? O ID de hotel é composto por 7 números e é único para cada hotel."))
    idHotel = String(idHotel)

    while(autorizaçaoWhile){
        if(idHotel.length === 7){
            if(arrayHoteis.find(x => {return x._5_Id_Hotel === idHotel})){
                idHotel = Number(prompt("ID já existente. Insira um ID válido. O ID é composto por 7 números e é único para cada hotel."))
                idHotel = String(idHotel)}
            else{autorizaçaoWhile = false}}
        else{idHotel = Number(prompt("ID inválido. Insira um ID válido. O ID é composto por 7 números e é único para cada hotel.")); idHotel = String(idHotel)} 
    }autorizaçaoWhile = true
    
    categoria = parseInt(prompt("Qual a categoria do seu Hotel? 1✯, 2✯, 3✯, 4✯, ou 5✯?"))

    while(autorizaçaoWhile){
        if(categoria >= 1 && categoria <= 5){categoria = (categoria + "✯"); autorizaçaoWhile = false}
        else{categoria = parseInt(prompt("Quantidade de estrelas da categoria inválida. Qual a real categoria do seu Hotel? 1✯, 2✯, 3✯, 4✯, ou 5✯?"))}
    }autorizaçaoWhile = true

    endereço = prompt("Qual o endereço do seu Hotel?")

    while(autorizaçaoWhile){
        if(arrayHoteis.find(x => {return x._3_Endereço === endereço})){endereço = prompt("Endereço já existente no cadastro de outro estabelecimento ou residência. Insira um endereço válido.")}
        else{autorizaçaoWhile = false}
    }autorizaçaoWhile = true

    telefone = Number(prompt("Qual o telefone do seu Hotel? EX: 1199573269"))
    telefone = String(telefone)

    while(autorizaçaoWhile){
        if(telefone.length === 10){
            if(arrayHoteis.find(x => {return x._4_Telefone === telefone})){
                telefone = Number(prompt("Número de telefone já existente em outro estabelecimento. Insira um número de telefone válido. EX: 1199573269"))
                telefone = String(telefone)}
            else{autorizaçaoWhile = false}}
        else{telefone = Number(prompt("Número de telefone inválido. Insira um número de telefone válido. EX: 1199573269")); telefone = String(telefone)}      
    }autorizaçaoWhile = true

    hotel = new Hotel(nomeHotel, categoria, endereço, telefone, idHotel)
    arrayHoteis.push(hotel)
};

function CadastrarReserva(){
    nomeResponsavel = prompt("Qual o nome do responsável pela reserva?")

    idReserva = Number(prompt("Qual o ID de sua reserva? O ID de uma reserva é composto por 7 números e é único para cada reserva."))
    idReserva = String(idReserva)

    while(autorizaçaoWhile){
        if(idReserva.length === 7){
            if(arrayReservas.find(x => {return x._2_Id_Reserva === idReserva})){
                idReserva = Number(prompt("ID de reserva já existente. Insira um ID de reserva válido. O ID de uma reserva é composto por 7 números e é único para cada reserva."))
                idReserva = String(idReserva)}
            else{autorizaçaoWhile = false}}
        else{idReserva = Number(prompt("ID de reserva inválido. Insira um ID de reserva válido. O ID de uma reserva é composto por 7 números e é único para cada reserva.")); idReserva = String(idReserva)}
    }autorizaçaoWhile = true

    idHotel = Number(prompt("Qual o ID do Hotel que deseja se hospedar? O ID de um Hotel também é composto por 7 números e é único para cada Hotel."))
    idHotel = String(idHotel)

    while(autorizaçaoWhile){
        if(idHotel.length === 7){
            if(arrayHoteis.find(x => {return x._5_Id_Hotel === idHotel})){autorizaçaoWhile = false}
            else{idHotel = Number(prompt("ID do Hotel não encontrado. Insira o ID de um Hotel válido. O ID de um Hotel é composto por 7 números e é único para cada Hotel."))
                 idHotel = String(idHotel)}}
        else{idHotel = Number(prompt("ID do Hotel inválido. Insira um ID de Hotel válido. O ID de um Hotel é composto por 7 números e é único para cada Hotel.")); idHotel = String(idHotel)}
    }autorizaçaoWhile = true

    while(autorizaçaoWhile){
        mesEntrada = prompt("Qual o mês de entrada no Hotel? Responda em formato númerico.")
        confirmaçaoResposta = Number(prompt('Mês de entrada: Mês ' + mesEntrada + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))

        while(autorizaçaoWhile){
            if(confirmaçaoResposta === 1 || confirmaçaoResposta === 2){
                if(confirmaçaoResposta === 1){autorizaçaoWhile = false}
                else{mesEntrada = prompt("Qual o mês de entrada no Hotel? Responda em formato númerico.")
                     confirmaçaoResposta = Number(prompt('Mês de entrada: Mês ' + mesEntrada + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
            else{confirmaçaoResposta = Number(prompt('Erro... Responda novamente. Mês de entrada: Mês ' + mesEntrada + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
        }autorizaçaoWhile = true

        diaEntrada = prompt("Qual o dia de entrada no Hotel? Responda em formato númerico.")
        confirmaçaoResposta = Number(prompt('Dia de entrada: Dia ' + diaEntrada + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))

        while(autorizaçaoWhile){
            if(confirmaçaoResposta === 1 || confirmaçaoResposta === 2){
                if(confirmaçaoResposta === 1){autorizaçaoWhile = false}
                else{diaEntrada = prompt("Qual o dia de entrada no Hotel? Responda em formato númerico.")
                     confirmaçaoResposta = Number(prompt('Dia de entrada: Dia ' + diaEntrada + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
            else{confirmaçaoResposta = Number(prompt('Erro... Responda novamente. Dia de entrada: Dia ' + diaEntrada + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
        }autorizaçaoWhile = true

        if(diaEntrada.length === 1){diaEntrada = ("0" + diaEntrada)}
        if(mesEntrada.length === 1){mesEntrada = ("0" + mesEntrada)}
        let dataDeEntradaFormatada = (diaEntrada + "/" + mesEntrada + "/2024")
        diaEntrada = (mesEntrada + diaEntrada)
        diaEntrada = Number(diaEntrada)

        mesSaida = prompt("Qual o mês de saída do Hotel? Responda em formato númerico.")
        confirmaçaoResposta = Number(prompt('Mês de saída: Mês ' + mesSaida + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))
    
        while(autorizaçaoWhile){
            if(confirmaçaoResposta === 1 || confirmaçaoResposta === 2){
                if(confirmaçaoResposta === 1){autorizaçaoWhile = false}
                else{mesSaida = prompt("Qual o mês de saída do Hotel? Responda em formato númerico.")
                     confirmaçaoResposta = Number(prompt('Mês de saída: Mês ' + mesSaida + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
            else{confirmaçaoResposta = Number(prompt('Erro... Responda novamente. Mês de saída: Mês ' + mesSaida + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
        }autorizaçaoWhile = true

        diaSaida = prompt("Qual o dia de saída do Hotel? Responda em formato númerico.")
        confirmaçaoResposta = Number(prompt('Dia de saída: Dia ' + diaSaida + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))

        while(autorizaçaoWhile){
            if(confirmaçaoResposta === 1 || confirmaçaoResposta === 2){
                if(confirmaçaoResposta === 1){autorizaçaoWhile = false}
                else{diaSaida = prompt("Qual o dia de saída do Hotel? Responda em formato númerico.")
                     confirmaçaoResposta = Number(prompt('Dia de saída: Dia ' + diaSaida + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
            else{confirmaçaoResposta = Number(prompt('Erro... Responda novamente. Dia de saída: Dia ' + diaSaida + '. Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}
        }autorizaçaoWhile = true

        if(diaSaida.length === 1){{diaSaida = ("0" + diaSaida)}}
        if(mesSaida.length === 1){mesSaida = ("0" + mesSaida)}
        let dataDeSaidaFormatada = (diaSaida + "/" + mesSaida + "/2024")
        diaSaida = (mesSaida + diaSaida)
        diaSaida = Number(diaSaida)

        let verificaçaoData = diaSaida - diaEntrada
        diaEntrada = dataDeEntradaFormatada
        diaSaida = dataDeSaidaFormatada

        if(verificaçaoData < 1){verificaçaoData = prompt("Erro na data de entrada e saída do Hotel, responda novamente. Insira qualquer coisa para proseguir.")}
        else{autorizaçaoWhile = false}
    }

    reserva = new Reserva(nomeResponsavel, idReserva, idHotel, diaEntrada, diaSaida)
    arrayReservas.push(reserva)
};

function ExibirTodasReservas(idHotel){
    let acharNomeHotel = arrayHoteis.findIndex(x => {return x._5_Id_Hotel === idHotel})
    acharNomeHotel = arrayHoteis[acharNomeHotel]
    acharNomeHotel = acharNomeHotel._1_Nome_Hotel
    let arrayReservasTemporario = arrayReservas.slice()
    console.log("EXIBIR TODAS AS RESERVAS POR ID DE HOTEL")
    console.log("")

    for(let contador = 0; contador < arrayReservas.length; contador++){
        let acharOutrasInf = arrayReservasTemporario.findIndex(x => {return x._3_Id_Hotel === idHotel})
        if(acharOutrasInf != -1){
            let indiceExcluir = acharOutrasInf
            acharOutrasInf = arrayReservasTemporario[acharOutrasInf]
            nomeResponsavel = acharOutrasInf._1_Nome_Responsável
            diaEntrada = acharOutrasInf._4_Dia_Entrada
            diaSaida = acharOutrasInf._5_Dia_Saída
            arrayReservasTemporario.splice(indiceExcluir, 1)
    
            console.log("Nome do Hotel: " + acharNomeHotel)
            console.log("Nome do(a) Responsável pela reserva: " + nomeResponsavel)
            console.log("Dia de entrada: " + diaEntrada)
            console.log("Dia de saída: " + diaSaida)
            console.log("")
        }
    }
};

function ProcurarRezervaPorId(idReserva){
    let acharReserva = arrayReservas.findIndex(x => {return x._2_Id_Reserva === idReserva})
    acharReserva = arrayReservas[acharReserva]
    diaEntrada = acharReserva._4_Dia_Entrada
    diaSaida = acharReserva._5_Dia_Saída
    acharOutrasInf = acharReserva._3_Id_Hotel
    let acharHotel = arrayHoteis.findIndex(x => {return x._5_Id_Hotel === acharOutrasInf})
    acharHotel = arrayHoteis[acharHotel]
    nomeHotel = acharHotel._1_Nome_Hotel
    endereço = acharHotel._3_Endereço

    console.log("BUSCAR RESERVA POR ID DE RESERVA")
    console.log("")
    console.log("Nome do hotel: " + nomeHotel)
    console.log("Endereço do hotel: " + endereço)
    console.log("Dia de entrada: " + diaEntrada)
    console.log("Dia de saída: " + diaSaida)
    console.log("")
};

function ProcurarReservaPorNome(nomeResponsavel){
    let arrayReservasTemporario = arrayReservas.slice()
    console.log("EXIBIR TODAS AS RESERVAS POR NOME")
    console.log("")
    for(let contador = 0; contador < arrayReservas.length; contador++){
        let acharNome = arrayReservasTemporario.findIndex(x => {return x._1_Nome_Responsável === nomeResponsavel})
        if(acharNome != -1){
            let indiceExcluir = acharNome
            acharNome = arrayReservasTemporario[acharNome]
            nomeResponsavel = acharNome._1_Nome_Responsável
            idReserva = acharNome._2_Id_Reserva
            idHotel = acharNome._3_Id_Hotel
            diaEntrada = acharNome._4_Dia_Entrada
            diaSaida = acharNome._5_Dia_Saída
            arrayReservasTemporario.splice(indiceExcluir, 1)

            console.log("Nome do responsável: " + nomeResponsavel)
            console.log("ID da reserva: " + idReserva)
            console.log("ID do hotel: " + idHotel)
            console.log("Dia de entrada: " + diaEntrada)
            console.log("Dia de saída: " + diaSaida)
            console.log("")
        }
    }
    console.log("CASO NÃO TENHA SIDO EXIBIDO NENHUMA RESERVA, ENTÃO ESTE NOME NÃO POSSUI RESERVAS")
    console.log("")
};

function ExibirHoteisPorCategoria(categoria){
    let arrayHoteisPorCategoria = []
    let arrayHoteisTemporario = arrayHoteis.slice()
    for(let contador = 0; contador < arrayHoteis.length; contador++){
        let acharCategoria = arrayHoteisTemporario.findIndex(x => {return x._2_Categoria === categoria})
        if(acharCategoria != -1){  
            let indiceExcluir = acharCategoria
            acharCategoria = arrayHoteisTemporario[acharCategoria]
            nomeHotel = acharCategoria._1_Nome_Hotel
            categoria = acharCategoria._2_Categoria
            endereço = acharCategoria._3_Endereço
            telefone = acharCategoria._4_Telefone
            idHotel = acharCategoria._5_Id_Hotel
            hotel = new Hotel(nomeHotel, categoria, endereço, telefone, idHotel)
            arrayHoteisPorCategoria.push(hotel)
            arrayHoteisTemporario.splice(indiceExcluir, 1)
        }
    }
    console.log("EXIBIR TODOS OS HOTEIS DISPONíVEIS POR CATEGORIA")
    console.log(arrayHoteisPorCategoria)
    if(arrayHoteisPorCategoria.length === 0){console.log("NENHUM HOTEL ENCONTRADO NESSA CATEGORIA")}
};

function AtualizarTelefoneDeContato(idHotel, telefone){
    let mudarTelefone = arrayHoteis.findIndex(x => {return x._5_Id_Hotel === idHotel})
    let guardarIndice = mudarTelefone
    mudarTelefone = arrayHoteis[mudarTelefone]
    mudarTelefone._4_Telefone = telefone
    arrayHoteis[guardarIndice] = mudarTelefone
};

let açaoDoUsuario = Number(prompt('Seja bem vindo! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'));

while(autorizaçaoWhile){
    switch(açaoDoUsuario){

        case 1:
            CadastrarHotel()
            açaoDoUsuario = Number(prompt('Hotel cadastrado com sucesso! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;

        case 2:
            CadastrarReserva()
            açaoDoUsuario = Number(prompt('Reserva cadastrada com sucesso! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;
            
        case 3:
            idHotel = Number(prompt("Qual o ID do Hotel? O ID é composto por 7 números e é único para cada hotel."))
            idHotel = String(idHotel)

            while(autorizaçaoWhile){
                if(idHotel.length === 7){
                    confirmaçaoResposta = arrayHoteis.find(x => {return x._5_Id_Hotel === idHotel})
                    confirmaçaoResposta = confirmaçaoResposta._5_Id_Hotel
                    if(confirmaçaoResposta === idHotel){autorizaçaoWhile = false}
                    else{idHotel = Number(prompt("ID de hotel não encontrado. Responda novamente. Qual o ID do Hotel? O ID é composto por 7 números e é único para cada hotel."))
                         idHotel = String(idHotel)}}
                else{idHotel = Number(prompt("Erro... Responda novamente. Qual o ID do Hotel? O ID é composto por 7 números e é único para cada hotel."))
                     idHotel = String(idHotel)}
            }autorizaçaoWhile = true

            ExibirTodasReservas(idHotel)
            açaoDoUsuario = Number(prompt('Reservas exibidas com sucesso! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;

        case 4:
            idReserva = Number(prompt("Qual o ID da reserva? O ID de uma reserva é composto por 7 números e é único para cada reserva."))
            idReserva = String(idReserva)

            while(autorizaçaoWhile){
                if(idReserva.length === 7){
                    confirmaçaoResposta = arrayReservas.find(x => {return x._2_Id_Reserva === idReserva})
                    confirmaçaoResposta = confirmaçaoResposta._2_Id_Reserva
                    if(confirmaçaoResposta === idReserva){autorizaçaoWhile = false}
                    else{idReserva = Number(prompt("ID de reserva não encontrado. Responda novamente. Qual o ID da reserva? O ID de uma reserva é composto por 7 números e é único para cada reserva."))
                         idReserva = String(idReserva)}}
                else{idReserva = Number(prompt("Erro... Responda novamente. Qual o ID da reserva? O ID de uma reserva é composto por 7 números e é único para cada reserva."))
                     idReserva = String(idReserva)}
            }autorizaçaoWhile = true

            ProcurarRezervaPorId(idReserva)
            açaoDoUsuario = Number(prompt('Reserva exibida com sucesso! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;

        case 5:
            nomeResponsavel = prompt("Qual o nome do responsável?")

            ProcurarReservaPorNome(nomeResponsavel)
            açaoDoUsuario = Number(prompt('Reservas por nome exibida com sucesso! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;

        case 6:
            categoria = parseInt(prompt("Qual a categoria que deseja? 1✯, 2✯, 3✯, 4✯, ou 5✯?"))

            while(autorizaçaoWhile){
                if(categoria >= 1 && categoria <= 5){categoria = (categoria + "✯"); autorizaçaoWhile = false}
                else{categoria = parseInt(prompt("Erro... Responda novamente com números. Qual a categoria que deseja? 1✯, 2✯, 3✯, 4✯, ou 5✯?"))}
            }autorizaçaoWhile = true

            ExibirHoteisPorCategoria(categoria)
            açaoDoUsuario = Number(prompt('Hoteis por categoria exibidos com sucesso! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;

        case 7:
            idHotel = Number(prompt("Qual o ID do Hotel? O ID é composto por 7 números e é único para cada hotel."))
            idHotel = String(idHotel)

            while(autorizaçaoWhile){
                if(idHotel.length === 7){
                    confirmaçaoResposta = arrayHoteis.find(x => {return x._5_Id_Hotel === idHotel})
                    confirmaçaoResposta = confirmaçaoResposta._5_Id_Hotel
                    if(confirmaçaoResposta === idHotel){autorizaçaoWhile = false}
                    else{idHotel = Number(prompt("ID de hotel não encontrado. Responda novamente. Qual o ID do Hotel? O ID é composto por 7 números e é único para cada hotel."))
                         idHotel = String(idHotel)}}
                else{idHotel = Number(prompt("Erro... Responda novamente. Qual o ID do Hotel? O ID é composto por 7 números e é único para cada hotel."))
                     idHotel = String(idHotel)}
            }autorizaçaoWhile = true

            telefone = Number(prompt("Qual o novo telefone de contato? EX: 1199573269"))
            telefone = String(telefone)

            while(autorizaçaoWhile){
                if(telefone.length === 10){
                    if(arrayHoteis.find(x => {return x._4_Telefone === telefone})){
                        telefone = Number(prompt("Número de telefone já existente em outro estabelecimento. Insira um número de telefone válido. EX: 1199573269"))
                        telefone = String(telefone)}
                    else{autorizaçaoWhile = false}}
                else{telefone = Number(prompt("Número de telefone inválido. Insira um número de telefone válido. EX: 1199573269")); telefone = String(telefone)}      
            }autorizaçaoWhile = true

            AtualizarTelefoneDeContato(idHotel, telefone)
            açaoDoUsuario = Number(prompt('Telefone de contato do hotel atualizado com sucesso! Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;

        case 8:
            autorizaçaoWhile = false
            console.log("PROGRAMA ENCERRADO")
            break;

        default:
            açaoDoUsuario = Number(prompt('Erro... Responda novamente. Insira "1" para cadastrar um hotel, "2" para cadastrar uma reserva, "3" para exibir todas as reservas por ID de hotel, "4" para procurar uma reserva por ID de reserva,' + 
                ' "5" para procurar reservas por nome, "6" para exibir hoteis por categoria, "7" para atualizar telefone de contato de algum hotel, ou "8" caso queira encerrar o programa.'))
            break;
    }
};