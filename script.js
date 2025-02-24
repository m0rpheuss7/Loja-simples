// Atualiza o rodapé com o nome digitado
const nameInput = document.getElementById('name');
const footer = document.getElementById('footer');
nameInput.addEventListener('input', () => {
    footer.textContent = nameInput.value || 'Seu nome aparecerá aqui...';
});

// Seleção dos elementos da loja
const addToCartButton = document.getElementById('addToCart');
const totalAmount = document.getElementById('totalAmount');
const notification = document.getElementById('notification');
const progressContainer = document.getElementById('progress-container');
const progressBar = document.getElementById('progress-bar');

// Ao clicar em "Adicionar ao Carrinho"
addToCartButton.addEventListener('click', () => {
    // Se existir uma animação em andamento, limpa-a
    if (window.progressInterval) {
        clearInterval(window.progressInterval);
    }
    
    const product1 = parseFloat(document.getElementById('product1').value) || 0;
    const product2 = parseFloat(document.getElementById('product2').value) || 0;
    const product3 = parseFloat(document.getElementById('product3').value) || 0;

    // Validação: se todos os produtos forem 0 ou nulos, exibe notificação
    if (product1 === 0 && product2 === 0 && product3 === 0) {
        notification.style.display = 'block'; 
        setTimeout(() => {
            notification.style.display = 'none'; 
        }, 5000);
        return;
    } else {
        // Calcula e exibe o total da compra
        const total = product1 + product2 + product3;
        totalAmount.textContent = `Total: R$ ${total.toFixed(2)}`;
        totalAmount.style.color = 'black';
    }
    
    // Reseta e exibe o gráfico de progressão
    progressBar.style.width = '0%';
    progressBar.textContent = '0%';
    progressBar.style.color = 'black';
    progressContainer.style.display = 'block';
    
    // Inicia a animação da barra de progresso
    animateProgressBar();
});

// Função para animar o gráfico de progressão
function animateProgressBar() {
    let progress = 0;
    window.progressInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';
        if (progress >= 100) {
            clearInterval(window.progressInterval);
            // Exibe a mensagem de conclusão em verde claro
            progressBar.textContent = "Compra concluída)))";
            progressBar.style.color = '#90EE90';
        }
    }, 100); // Incrementa 1% a cada 100 milissegundos
}
