// script.js

function adicionarAoCarrinho() {
    // 1. Obter os valores atuais dos inputs
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let valor3 = parseFloat(document.getElementById("valor3").value);
    
    // 2. Validar os inputs: cada valor deve ser um número válido (não nulo ou vazio)
    if (valor1 === null || valor1 === "" || isNaN(valor1)) {
        alert("Por favor, insira um valor válido para o Produto 1!");
        return;
    }
    if (valor2 === null || valor2 === "" || isNaN(valor2)) {
        alert("Por favor, insira um valor válido para o Produto 2!");
        return;
    }
    if (valor3 === null || valor3 === "" || isNaN(valor3)) {
        alert("Por favor, insira um valor válido para o Produto 3!");
        return;
    }
    
    // 3. Recalcular o total com os valores atuais
    let totalCompra = valor1 + valor2 + valor3;
    document.getElementById("total").innerText = totalCompra.toFixed(2);
    
    // 4. Fazer a barra de progresso voltar bruscamente pro final:
    //    Aqui, em vez de animar o progresso, definimos a largura da barra imediatamente para 100%
    document.getElementById("progress").style.width = "100%";
    document.getElementById("completedMessage").style.display = "block";
}

// Função para exibir mensagem de boas-vindas
function bemVindo() {
    let nome = document.getElementById("nome").value;
    if (nome.trim() !== "") {
        alert("Bem-vindo, " + nome + "!");
    } else {
        alert("Por favor, insira seu nome.");
    }
}

// Função para atualizar o rodapé com a mensagem "Bem-vindo, [nome]"
function atualizarRodape() {
    let nome = document.getElementById("nome").value.trim();
    let rodape = document.getElementById("rodape");

    rodape.innerText = nome ? `Bem-vindo, ${nome}` : "Bem-vindo, ";
    rodape.style.fontWeight = "bold";
    rodape.style.color = "blue";
}

// Adicionar evento para atualizar o rodapé dinamicamente enquanto o usuário digita
document.getElementById("nome").addEventListener("input", atualizarRodape);
