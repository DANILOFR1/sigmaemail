# Terminal de Segurança - Web App

Um Progressive Web App (PWA) simples em HTML, CSS e JavaScript que simula um terminal digital de cofre e funciona offline.

## Sobre o Projeto

Este aplicativo web simula um terminal de segurança onde o usuário precisa inserir uma senha específica para desbloquear um conteúdo oculto. Ele foi projetado para funcionar tanto em dispositivos móveis quanto em computadores, mesmo sem acesso à internet.

## Funcionalidades

- Interface com visual de "terminal digital de cofre"
- Campo para senha com formato específico (4 letras + 4 números)
- Validação da senha inserida
- Limite de 10 tentativas para acertar a senha
- Exibição de mensagem personalizada com base na entrada
- Revelação de conteúdo oculto quando a senha correta é inserida
- Disponibilização de um documento PDF para download quando a senha for correta
- Sistema de falha catastrófica (explosão do cofre) quando as tentativas se esgotam
- Funcionalidade offline completa (PWA)

## Como Publicar no GitHub Pages

1. Crie um repositório no GitHub.

2. Faça upload de todos os arquivos deste projeto para o repositório:
   - index.html
   - styles.css
   - script.js
   - service-worker.js
   - manifest.json
   - Dossie_SIGMA_Cofre_MB_Indireto.pdf
   - README.md
   - Adicione os ícones necessários (icon-192.png e icon-512.png)

3. Vá para **Settings** > **Pages** no seu repositório.

4. Em **Source**, selecione a branch onde estão seus arquivos (geralmente `main` ou `master`).

5. Clique em **Save**.

O GitHub Pages publicará o site em: `https://[seu-nome-de-usuario].github.io/[nome-do-repositorio]/`

## Testes Locais

Para testar localmente antes de publicar, você pode usar um servidor local:

1. Com Python:
   ```
   python -m http.server
   ```

2. Com Node.js:
   ```
   npx serve
   ```

Depois acesse `http://localhost:8000` ou `http://localhost:5000` em seu navegador.

## Observações

- Para que o PWA funcione corretamente, você precisará criar os ícones mencionados no manifesto.
- A senha correta é: ZRMA2037 (case insensitive)
- O usuário tem 10 tentativas para acertar a senha, caso contrário, o cofre "explode" e o jogo termina.
- O aplicativo força o formato correto de senha enquanto o usuário digita.
- Quando o usuário acerta a senha, ele pode baixar o arquivo PDF confidencial. 