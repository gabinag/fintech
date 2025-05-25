# 📊 Fintech - Projeto com React e TypeScript

Este é um projeto desenvolvido durante o curso de React com TypeScript da [Origamid](https://www.origamid.com/), com o objetivo de aplicar na prática os conceitos ensinados no curso.

## 🚀 Sobre o projeto

A aplicação simula uma interface para visualização de dados de vendas, consumindo uma API disponibilizada pelo curso. Através dela é possível visualizar vendas realizadas, filtrá-las por período e ter uma visão geral por meio de gráficos.

## 🔧 Funcionalidades

- Tela de **Resumo**:
  - Inputs para selecionar data de início e fim.
  - Botões de atalho para os últimos 4 meses.
  - Exibição de totais: valor de vendas, valor recebido e valor processando.
  - Gráfico utilizando **Recharts** para exibir a distribuição de status: pagos, processando e falha.

- Tela de **Vendas**:
  - Lista de vendas com nome, ID e valor.
  - Ao clicar em uma venda, exibe todos os detalhes: nome, ID, valor, status (pago, processando ou falha), tipo de pagamento (boleto, pix ou cartão) e número de parcelas (se houver).

## 💡 Tecnologias e ferramentas

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Recharts](https://recharts.org/en-US/)
- API REST de vendas (disponibilizada pelo curso)

## 🖥️ Demonstração do projeto 

- https://fintech-gabinags-projects.vercel.app/ 
