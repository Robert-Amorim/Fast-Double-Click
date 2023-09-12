# Bem-vindo ao Fast Double Click! :rocket:

## Visão Geral
O Fast Double Click é uma aplicação full-stack que desafia os usuários a clicar duas vezes consecutivamente em um botão na página inicial "Home". A aplicação mede o intervalo de tempo entre esses cliques, registrando a data e a hora. Os registros são armazenados no back-end em um arquivo "registros.json".

Na segunda página, "List of Records", os usuários podem visualizar todos os registros. Eles têm a opção de filtrar os registros por data e ordená-los por horário ou tempo. Isso oferece uma análise detalhada dos intervalos de tempo registrados.

Em resumo, o Fast Double Click permite medir e registrar intervalos de tempo entre cliques, oferecendo uma maneira simples de visualizar, filtrar e classificar esses registros.

## Tecnologias Utilizadas
- JavaScript
- React
- Node.js
- CSS
- Docker
- Jest

## Instalação de Dependências
Para executar o projeto, siga as etapas abaixo:

1. Clone o repositório com o seguinte comando:

   ```
   git clone git@github.com:Robert-Amorim/Fast-Double-Click.git
   ```
   Ou faça o download do arquivo ZIP e extraia o conteúdo em seu computador.

2. Navegue até a raiz do projeto "Fast-Double-Click" ` e instale as dependências necessárias executando o comando:
   ```
   npm run install-deps
   ```
3. Na raiz do projeto, execute o seguinte comando para iniciar os contêineres Docker:
   ```
   docker-compose up -d
   ```
5. Agora, a aplicação estará disponível em execução no endereço http://localhost:3000.

## Executando Localmente
1. Clone o repositório com o seguinte comando:
   ```
   git clone git@github.com:Robert-Amorim/Fast-Double-Click.git
   ```

2. Verifique se você possui o Node.js na versão 16 ou superior instalada usando o comando:
   ```
   node -v
   ```

3. Se a versão do Node.js for inferior a 16, você pode configurá-la facilmente com o comando:
   ```
   nvm use 16
   ```

4. Navegue até a raiz do projeto "Fast-Double-Click" ` e instale as dependências necessárias executando o comando:
   ```
   npm run install-deps
   ```

5. Inicie o servidor na pasta `/backend` com o seguinte comando:
   ```
   npm run dev
   ```

6. E na pasta `/frontend`, inicie a aplicação com o comando:
   ```
   npm start
   ```
   Você será automaticamente redirecionado para o site.

## Executando Testes com Jest
- Testes de Front-End
   1. Acesse a pasta `/frontend`.
   2. Execute o comando:
      ```
      npm test
      ```

- Testes de Back-End
   1. Acesse a pasta `/backend`.
   2. Execute o comando:
      ```
      npm test
      ```