//CAÇA BUGS - CONDICIONAIS

let iniciar = prompt("Deseja iniciar o programa? s/n");

if (iniciar === "n") {
    alert("Programa encerrado!")
} else if (iniciar === "s") {
    alert("Programa iniciado!")
    let opcao = Number(prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada"))
    switch (opcao) {
        case 1:
            alert("Continue tentando, você VAI conseguir!")
            alert("Programa encerrado!")
            break;
        case 2:
            alert("Você NÃO VAI conseguir, desista!")
            alert("Programa encerrado!")
            break;
        case 3:
            alert("...")
            alert("Programa encerrado!")
            break;
        default:
            alert("Opção inválida, reinicie o programa e selecione um número de 1 a 3.")
            alert("Programa encerrado!")
            break;
    }
} else {alert("Opção inválida, reinicie o programa e selecione uma opção válida")
        alert("Programa encerrado!")
};