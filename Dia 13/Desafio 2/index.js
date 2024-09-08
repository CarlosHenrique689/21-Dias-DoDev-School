class Carro{
    Nome_da_Equipe
    Potência
    Velocidade_Máxima
    Aceleração

    constructor(){
        this.Nome_da_Equipe = nomeEquipe 
        this.Potência = potencia 
        this.Velocidade_Máxima = velocidadeMaxima 
        this.Aceleração = aceleração
    }

    CalcularTempoDeVolta(distancia){
        tempoDeVolta = distancia / (this.Velocidade_Máxima / this.Aceleração)
        return tempoDeVolta
    }
};

class Corrida{
    Nome_do_Circuito
    Tipo
    Distância
    Participantes
    Vencedor

    constructor(){
        this.Nome_do_Circuito = nomeCircuito
        this.Tipo = tipo 
        this.Distância = distancia 
        this.Participantes = participantes
        this.Vencedor = vencedor 
    } 
    
    VerificaçãoVencedor(){ 
        if(tempoDeVolta < disputaTempoDeVolta){vencedor = nomeEquipe; disputaTempoDeVolta = tempoDeVolta}     
    }
    VencedorDaCorrida(){
        console.log('O vencedor da corrida foi o carro da equipe "' + vencedor + '" com o tempo de: ' + disputaTempoDeVolta.toFixed(3) + ' segundos.')
        console.log(corrida)
    }
};

let equipe = [];
let participantes = [];
let indexEquipe = 0;
let indexParticipantes = 0
let carro = undefined;
let corrida = undefined;
let confirmaçãoWhile = true;
let confirmaçãoWhileGloal = true;
let confirmaçãoDeResposta = undefined;
let continuarOuParar = undefined;
let equipeDaVez = 1;
let disputaTempoDeVolta = 9999999999;
let vencedor = undefined;
let tempoDeVolta = 0;

nomeCircuito = prompt("Qual o nome do local da corrida?");
confirmaçãoDeResposta = Number(prompt('A respota: "' + nomeCircuito + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{nomeCircuito = prompt("Qual o nome do local da corrida?")
            confirmaçãoDeResposta = Number(prompt('A respota: "' + nomeCircuito + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A respota: "' + nomeCircuito + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
}confirmaçãoWhile = true;

tipo = prompt("Qual o gênero desta corrida? EX: F1, Rally, Stock Car, etc.");
confirmaçãoDeResposta = Number(prompt('A respota: "' + tipo + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{tipo = prompt("Qual o gênero desta corrida? EX: F1, Rally, Stock Car, etc.")
            confirmaçãoDeResposta = Number(prompt('A respota: "' + tipo + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A respota: "' + tipo + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
}confirmaçãoWhile = true;

distancia = parseFloat(prompt("Qual a distância total desta corrida em Metros?"));
confirmaçãoDeResposta = Number(prompt('A respota: "' + distancia + ' Metros" está correta? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{distancia = parseFloat(prompt("Qual a distância total desta corrida em Metros?"))
            confirmaçãoDeResposta = Number(prompt('A respota: "' + distancia + ' Metros" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A respota: "' + distancia + ' Metros" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
}confirmaçãoWhile = true;

corrida = new Corrida(nomeCircuito, tipo, distancia, vencedor);

while(confirmaçãoWhileGloal){
    nomeEquipe = prompt("Qual o nome da equipe do " + equipeDaVez + "º carro?");
    confirmaçãoDeResposta = Number(prompt('A respota: "' + nomeEquipe + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'));

    while(confirmaçãoWhile){
        if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
            if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{nomeEquipe = prompt("Qual o nome da equipe do " + equipeDaVez + "º carro?")
                confirmaçãoDeResposta = Number(prompt('A respota: "' + nomeEquipe + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A respota: "' + nomeEquipe + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçãoWhile = true;

    potencia = parseInt(prompt("Quantos cavalos de potência tem o carro?"));
    confirmaçãoDeResposta = Number(prompt('A respota: "' + potencia + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'));

    while(confirmaçãoWhile){
        if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
            if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{potencia = parseInt(prompt("Quantos cavalos de potência tem o carro?"))
                confirmaçãoDeResposta = Number(prompt('A respota: "' + potencia + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A respota: "' + potencia + '" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçãoWhile = true;

    velocidadeMaxima = parseInt(prompt("Qual a velocidade máxima desse carro em Km/h?"));
    confirmaçãoDeResposta = Number(prompt('A respota: "' + velocidadeMaxima + 'Km/h" está correta? Insira "1" para SIM, ou "2" para NÃO.'));

    while(confirmaçãoWhile){
        if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
            if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{velocidadeMaxima = parseInt(prompt("Qual a velocidade máxima desse carro em Km/h?"))
                confirmaçãoDeResposta = Number(prompt('A respota: "' + velocidadeMaxima + 'Km/h" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A respota: "' + velocidadeMaxima + 'Km/h" está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçãoWhile = true;

    aceleração = parseFloat(prompt("Quantos segundos o carro leva para ir de 0 a 100Km/h?"));
    confirmaçãoDeResposta = Number(prompt('A respota: "' + aceleração + 'seg." está correta? Insira "1" para SIM, ou "2" para NÃO.'));

    while(confirmaçãoWhile){
        if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
            if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
            else{aceleração = parseFloat(prompt("Quantos segundos o carro leva para ir de 0 a 100Km/h?"))
                confirmaçãoDeResposta = Number(prompt('A respota: "' + aceleração + 'seg." está correta? Insira "1" para SIM, ou "2" para NÃO.'))}}
        else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A respota: "' + aceleração + 'seg." está correta? Insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçãoWhile = true;

    continuarOuParar = Number(prompt('Caso queira cadastrar os dados de outra equipe insira, "1" para SIM, ou "2" para NÃO.'));

    while(confirmaçãoWhile){
        if(continuarOuParar === 1 || continuarOuParar === 2){
            if(continuarOuParar === 1){confirmaçãoWhile = false}
            else{confirmaçãoWhile = false; confirmaçãoWhileGloal = false}}
        else{continuarOuParar = Number(prompt('Erro... Responda novamente. Caso queira cadastrar os dados de outra equipe, insira "1" para SIM, ou "2" para NÃO.'))}
    }confirmaçãoWhile = true;

    equipeDaVez++;
    carro = new Carro(nomeEquipe, potencia, velocidadeMaxima, aceleração);
    equipe[indexEquipe] = carro;
    indexEquipe++;
    participantes[indexParticipantes] = carro;
    indexParticipantes++;
    carro.CalcularTempoDeVolta(distancia);
    corrida.VerificaçãoVencedor();
};

disputaTempoDeVolta = disputaTempoDeVolta * 1000;
corrida.VencedorDaCorrida();
corrida.Vencedor = vencedor;