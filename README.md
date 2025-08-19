# Projeto de Automação de Testes de API (Fake Store API)

Projeto de Automação de Testes de API desenvolvido para demonstrar a automação de testes de API utilizando a ferramenta Playwright em TypeScript. 
O objetivo é testar o fluxo de ponta a ponta de uma loja virtual simulada, a Fake Store API.

## 🚀 Tecnologias Utilizadas

* **Playwright**: Framework de automação de testes.
* **TypeScript**: Linguagem de programação para tipagem e melhoria do código.
* **Node.js**: Ambiente de execução.
* **Fake Store API**: API de testes utilizada no projeto.

## 📁 Estrutura do Projeto

O projeto segue uma estrutura organizada para facilitar a manutenção e escalabilidade:

* **`tests/`**: Contém todos os arquivos de teste.
    * **`api/`**: Testes específicos para a API.
* **`utils/`**: Pasta de utilidades e helpers.
    * **`api-helpers/`**: Classes e funções para simplificar as requisições API.
    * **`data/`**: Arquivos com dados de teste (payloads).
* **`playwright.config.ts`**: Arquivo de configuração do Playwright.

## ⚙️ Como Executar os Testes

Siga os passos abaixo para rodar a suíte de testes em sua máquina:

1.  **Clone o Repositório:**
    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [NOME_DO_SEU_REPOSITORIO]
    ```

2.  **Instale as Dependências:**
    ```bash
    npm install
    ```

3.  **Execute a Suíte de Testes:**
    ```bash
    npx playwright test
    ```

4.  **Visualize o Relatório de Testes (HTML):**
    Após a execução, um relatório interativo será gerado. Para abri-lo:
    ```bash
    npx playwright show-report
    ```

## ✅ Cenários de Teste

O projeto automatiza os seguintes fluxos:

1.  **Criação de Produtos**: Cadastra dois novos produtos via API e valida que os IDs são retornados.
2.  **Consulta de Produtos**: Consulta produtos existentes na API por seus IDs e valida as informações.
3.  **Fluxo de Carrinho**: Cria um novo carrinho com produtos, consulta o carrinho para validar os itens e, por fim, simula a sua remoção.