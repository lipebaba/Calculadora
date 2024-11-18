// Função para adicionar valores ao display
function adicionarValor(valor) {
    const display = document.getElementById("display");
    display.value += valor;
}

// Função para limpar o display
function limpar() {
    const display = document.getElementById("display");
    display.value = "";
}

// Função para calcular o resultado
function calcular() {
    const display = document.getElementById("display");
    try {
        // Avaliar a expressão do display usando eval()
        let resultado = eval(display.value);
        if (resultado === Infinity || resultado === -Infinity) {
            alert("Erro: Divisão por zero não permitida.");
            limpar();
        } else {
            display.value = resultado;
        }
    } catch (error) {
        alert("Erro: Operação inválida.");
        limpar();
    }
}
