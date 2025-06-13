
# 🛒 Loja Online React

Este projeto é uma simulação de uma loja online desenvolvida com **React**, que consome dados de uma API REST fake utilizando **JSON Server**. A aplicação permite listar produtos, visualizar individualmente, adicionar/remover do carrinho e exibir um resumo da compra.

---

## 🚀 Funcionalidades

- Listagem de produtos disponíveis
- Adição de produtos ao carrinho
- Remoção de produtos do carrinho
- Resumo do valor total da compra
- Feedback visual ao adicionar/remover produtos
- Finalização da compra com limpeza do carrinho e mensagem de confirmação

---

## 🔌 Simulando a API com JSON Server

1. Instale o JSON Server globalmente (se ainda não tiver):
```bash
npm install -g json-server
```

2. No diretório do projeto, crie um arquivo chamado `dbTeste.json` com os dados dos produtos:
```json
{
  "produtos": [
    {
      "id": 1,
      "nome": "Produto A",
      "preco": 49.90
    },
    {
      "id": 2,
      "nome": "Produto B",
      "preco": 89.90
    }
  ]
}
```

3. Rode o JSON Server:
```bash
json-server --watch dbTeste.json --port 3001
```

---

## ▶️ Rodando o Projeto Localmente

1. Clone o repositório:
```bash
git clone https://github.com/henzopuchetti/loja-online-react.git
```

2. Acesse o diretório:
```bash
cd loja-online-react
```

3. Instale as dependências:
```bash
npm install
```

4. Rode o projeto:
```bash
npm start
```

5. Em outro terminal, inicie o JSON Server:
```bash
json-server --watch dbTeste.json --port 3001
```

---

## 📂 Componentes Principais

- `Header`: Barra superior com nome da loja, link para produtos e ícone de carrinho.
- `ProductList`: Renderiza os produtos da API com limite de 3 por linha.
- `ProductItem`: Componente visual de cada produto.
- `Cart`: Lista dos itens adicionados ao carrinho com botão de remoção.
- `CartSummary`: Mostra o total da compra e botão para finalizar.
- `App`: Gerencia o estado do carrinho e define as rotas.

---

## 👨‍💻 Desenvolvedor

Henzo Puchetti  
[GitHub](https://github.com/henzopuchetti)

---

