// script.js
let totalCompra = 0;
let progresso = 0;
const limite = 100;

function adicionarAoCarrinho() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    
    // Verificar se os valores são válidos
    if (isNaN(valor1) || valor1 <= 0) {
        alert("Por favor, insira um valor válido para o Produto 1!");
        return;
    }
    if (isNaN(valor2) || valor2 <= 0) {
        alert("Por favor, insira um valor válido para o Produto 2!");
        return;
    }
    if (isNaN(valor3) || valor3 <= 0) {
        alert("Por favor, insira um valor válido para o Produto 3!");
        return;
    }
    
    totalCompra += valor1 + valor2 + valor3;  // Somar os valores
    document.getElementById("total").innerText = totalCompra.toFixed(2);
    iniciarProgresso();
}

function iniciarProgresso() {
    if (progresso >= limite) return;
    
    let intervalo = setInterval(() => {
        if (progresso >= limite) {
            clearInterval(intervalo);
            document.getElementById("completedMessage").style.display = "block";
            return;
        }
        progresso += 1;
        document.getElementById("progress").style.width = progresso + "%";
    }, 100);
}