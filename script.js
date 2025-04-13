document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const unlockButton = document.getElementById('unlock-btn');
    const resultMessage = document.getElementById('result-message');
    const secretDocument = document.getElementById('secret-document');
    const screenOutput = document.getElementById('screen-output');
    
    // A senha correta (case insensitive)
    const correctPassword = 'ZRMA2037';
    
    // Contador de tentativas
    let attempts = 10;
    
    // Atualizar a contagem de tentativas na tela
    function updateAttemptsDisplay() {
        // Verifica se já existe um elemento para exibir as tentativas
        let attemptsElement = document.getElementById('attempts-left');
        
        if (!attemptsElement) {
            // Se não existir, cria um novo parágrafo
            attemptsElement = document.createElement('p');
            attemptsElement.id = 'attempts-left';
            screenOutput.appendChild(attemptsElement);
        }
        
        // Atualiza o texto com o número de tentativas restantes
        attemptsElement.textContent = `> Tentativas restantes: ${attempts}`;
        attemptsElement.style.color = attempts <= 3 ? '#ff6600' : '#00ff00';
    }
    
    // Exibir contagem de tentativas inicial
    updateAttemptsDisplay();
    
    // Função para verificar a senha
    function checkPassword() {
        const enteredPassword = passwordInput.value.trim().toUpperCase();
        
        // Animação de processamento
        resultMessage.textContent = "Verificando...";
        resultMessage.style.color = "#ffff00";
        
        // Simulação de processamento (opcional)
        setTimeout(() => {
            if (enteredPassword === correctPassword) {
                // Senha correta
                resultMessage.textContent = "Cofre destravado. Você encontrou um documento confidencial.";
                resultMessage.style.color = "#00ff00";
                
                // Mostrar o documento secreto
                secretDocument.style.display = "block";
                
                // Mudar a cor do LED para verde
                document.querySelector('.led').style.backgroundColor = "#00ff00";
                document.querySelector('.led').style.boxShadow = "0 0 10px #00ff00";
                
                // Desabilitar input e botão
                passwordInput.disabled = true;
                unlockButton.disabled = true;
            } else {
                // Decrementar tentativas
                attempts--;
                updateAttemptsDisplay();
                
                if (attempts <= 0) {
                    // Esgotou as tentativas - Cofre explodiu
                    resultMessage.textContent = "ALERTA! LIMITE DE TENTATIVAS EXCEDIDO. O COFRE EXPLODIU.";
                    resultMessage.style.color = "#ff0000";
                    
                    // Efeito visual de explosão
                    document.querySelector('.terminal').style.animation = "explode 0.5s forwards";
                    
                    // Desabilitar input e botão
                    passwordInput.disabled = true;
                    unlockButton.disabled = true;
                    
                    // Mostrar mensagem de falha
                    const failureMessage = document.createElement('p');
                    failureMessage.textContent = "> Sistema comprometido. Dados perdidos.";
                    failureMessage.style.color = "#ff0000";
                    screenOutput.appendChild(failureMessage);
                } else {
                    // Ainda tem tentativas - Senha incorreta
                    resultMessage.textContent = "Acesso negado. Padrão incorreto.";
                    resultMessage.style.color = "#ff0000";
                    
                    // Efeito de "shake" no terminal
                    document.querySelector('.terminal').classList.add('shake');
                    setTimeout(() => {
                        document.querySelector('.terminal').classList.remove('shake');
                    }, 500);
                }
                
                // Limpar o campo de input
                passwordInput.value = '';
                passwordInput.focus();
            }
        }, 800);
    }
    
    // Event listeners
    unlockButton.addEventListener('click', checkPassword);
    
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
    
    // Validar formato enquanto digita (opcional)
    passwordInput.addEventListener('input', () => {
        const value = passwordInput.value;
        
        // Forçar o formato: 4 letras seguidas de 4 números
        if (value.length <= 4) {
            // Primeiros 4 caracteres devem ser letras
            passwordInput.value = value.replace(/[^a-zA-Z]/g, '').toUpperCase();
        } else {
            // Caracteres 5-8 devem ser números
            const letters = value.substring(0, 4).replace(/[^a-zA-Z]/g, '').toUpperCase();
            const numbers = value.substring(4).replace(/[^0-9]/g, '');
            passwordInput.value = letters + numbers;
        }
    });
    
    // Focar automaticamente no input
    passwordInput.focus();
    
    // Adicionar efeitos CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes explode {
            0% { transform: scale(1); opacity: 1; }
            20% { transform: scale(1.05); opacity: 1; box-shadow: 0 0 30px red; }
            100% { transform: scale(0.95); opacity: 0.7; box-shadow: 0 0 5px red; }
        }
        
        .shake {
            animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        
        #attempts-left {
            margin-top: 10px;
            font-size: 0.9rem;
        }
    `;
    document.head.appendChild(style);
}); 