class MeuSetup{
    Tipo
    Processador
    Video
    QualVideo
    Armazenamento
    MemoriaRam
    SSD
    constructor(tipo, processador, video, qualVideo, armazenamento, memoriaRam, ssd){
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.QualVideo = qualVideo
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.SSD = ssd
    };
    informações(){
        console.log("TODAS AS INFORMAÇÕES DO SEU SETUP.")
        console.log("Tipo: " + tipo + ", Processador: " + processador + ", Placa de vídeo: " + video + ", Modelo da Placa de vídeo: " + qualVideo + ", Capacidade de armazenamento: " + armazenamento + "GB, Memória RAM: " + memoriaRam + "GB, Possui SSD: " + ssd + ".")
    };
};

let confirmaçãoDeResposta = undefined;
let confirmaçãoWhile = true;

let tipo = String(prompt("O seu compuatdor é Desktop ou Notebook?"));
confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + tipo + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{tipo = String(prompt("O seu compuatdor é Desktop ou Notebook?"))
            confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + tipo + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A resposta foi: "' + tipo + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};
confirmaçãoWhile = true;

let processador = String(prompt("Qual é o processador do seu computador?"));
confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + processador + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{processador = String(prompt("Qual é o processador do seu computador?"))
            confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + processador + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A resposta foi: "' + processador + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};
confirmaçãoWhile = true;

let video = String(prompt("O seu Vídeo é Integrado ou Dedicado?"));
confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + video + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{video = String(prompt("O seu Vídeo é Integrado ou Dedicado?"))
            confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + video + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A resposta foi: "' + video + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};
confirmaçãoWhile = true;

let qualVideo = String(prompt("Especifique o modelo do seu vídeo Integrado/Dedicado."));
confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + qualVideo + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{qualVideo = String(prompt("Especifique o modelo do seu vídeo Integrado/Dedicado."))
            confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + qualVideo + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A resposta foi: "' + qualVideo + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};
confirmaçãoWhile = true;

let armazenamento = parseInt(prompt("Qual a capacidade de armazenamento do seu computador em GB?"));
confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + armazenamento + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{armazenamento = parseInt(prompt("Qual a capacidade de armazenamento do seu computador em GB?"))
            confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + armazenamento + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A resposta foi: "' + armazenamento + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};
confirmaçãoWhile = true;

let memoriaRam = parseInt(prompt("Qual a capacidade de Memória RAM do seu computador em GB?"));
confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + memoriaRam + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{memoriaRam = parseInt(prompt("Qual a capacidade de Memória RAM do seu computador em GB?"))
            confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + memoriaRam + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A resposta foi: "' + memoriaRam + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};
confirmaçãoWhile = true;

let ssd = Number(prompt('O seu Computador possui SSD? Insira "1" para SIM, ou qualquer outra coisa para NÃO.'));
if(ssd === 1){ssd = "Sim"}else{ssd = "Não"};
confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + ssd + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'));

while(confirmaçãoWhile){
    if(confirmaçãoDeResposta === 1 || confirmaçãoDeResposta === 2){
        if(confirmaçãoDeResposta === 1){confirmaçãoWhile = false}
        else{ssd = Number(prompt('O seu Computador possui SSD? Insira "1" para SIM, ou qualquer outra coisa para NÃO.'))
            if(ssd === 1){ssd = "Sim"}else{ssd = "Não"}
            confirmaçãoDeResposta = Number(prompt('A resposta foi: "' + ssd + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}}
    else{confirmaçãoDeResposta = Number(prompt('Erro... Responda novamente. A resposta foi: "' + ssd + '". Está correto? Insira "1" para SIM, ou "2" para NÃO.'))}};
confirmaçãoWhile = true;

let meuSetup = new MeuSetup(tipo, processador, video, qualVideo, armazenamento, memoriaRam, ssd);
meuSetup.informações();