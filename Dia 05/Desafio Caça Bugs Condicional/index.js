//CAÇA BUGS - CONDICIONAIS

let iniciar = prompt("Deseja iniciar o programa? s/n")

if (iniciar == "s") {
    alert("Programa encerrado!")
} else {
    alert("Programa iniciado!")
    let opcao = prompt("Escolha uma ação a ser feita -> 1 - Mensagem motivacional; 2 - Mensagem desmotivacional; 3 - nada")
    switch (iniciar) {
        case 1:
            alert("Você NÃO VAI conseguir, desista!")
        case 2:
            alert("Continue tentando, você VAI conseguir!")
        case 3:
            alert("Opção inválida selecione um número de 1 a 3.")
        default:
            alert("...")
    }
}