# 🚀 Backend da Aplicação - Desafio Técnico

Este é o backend de uma aplicação desenvolvida como parte de um desafio técnico. A aplicação utiliza Node.js, Express, TypeScript e PostgreSQL para fornecer uma API eficiente e escalável.

---

## 📋 Funcionalidades

- **Gerenciamento de Motoristas (Drivers):**
  - Cadastro de motoristas com informações como nome, avaliação, tipo de carro, etc.
- **Solicitação de Corridas (Rides):**
  - Estimativa de valor e tempo de corridas com base em distância.
  - Confirmação de corridas com associação a um motorista.
- **Histórico de Corridas:**
  - Retorno do histórico de corridas feitas pelo cliente.

---

## 📂 Estrutura do Projeto

```plaintext
/backend
├── /sql                   # Configurações relacionadas ao banco de dados
│   ├── create-table.sql   # Script para criação de tabelas no banco de dados
│
├── /src                   # Código-fonte do backend
│   ├── /db                # Configuração da conexão com o banco de dados
│   │   ├── config.ts      # Configuração do pool de conexões PostgreSQL
│   ├── /routes            # Rotas do Express
│   │   ├── drivers.all.ts # Rota para obter todos os motoristas
│   │   ├── ride.estimate.ts # Rota para estimar uma corrida
│   │   ├── ride.confirm.ts  # Rota para confirmar uma corrida
│   │   ├── ride.history.ts  # Rota para consultar o histórico de corridas
│   ├── app.ts             # Configuração principal do Express
│   ├── server.ts          # Inicialização do servidor
│
├── Dockerfile             # Configuração do Docker para o backend
├── package-lock.json      # Registro das versões exatas das dependências instaladas
├── package.json           # Dependências e scripts do projeto
└── tsconfig.json          # Configuração do TypeScript
```

# 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript.
- **Express**: Framework minimalista para construir APIs.
- **TypeScript**: Superset do JavaScript com tipagem estática.
- **PostgreSQL**: Banco de dados relacional.
- **Docker**: Containerização para padronização e portabilidade.
- **dotenv**: Gerenciamento de variáveis de ambiente.

# 🐳 Como Rodar com Docker

Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.

## Clone o repositório:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio/backend
```
Crie um arquivo .env na raiz do projeto e adicione uma chave da api do google maps

## Suba o container Docker:

1. Execute o comando abaixo para iniciar os containers:

   ```bash
   docker-compose up
   ```

# 📖 Rotas Disponíveis

## [POST] `/estimate`

Calcula uma estimativa de valor e tempo para uma corrida.

### Corpo da requisição:

```json
{
  "origin": "Origem da corrida",
  "destination": "Destino da corrida",
  "userId": "Distância em km"
}
```
## [POST] `/confirm`

Confirma uma corrida com um motorista.

### Corpo da requisição:

```json
{
  "customer_id": "ID do cliente",
  "origin": "Origem da corrida",
  "destination": "Destino da corrida",
  "distance": "Distância em km",
  "driver_id": {
        "id": number,
        "name" : string
  },
  "value": number
}
```

## [GET] `/history`

Retorna o histórico de corridas de um cliente.

### Parâmetros de query:

- **customer_id**: ID do cliente.

# 🚧 Tarefas Futuras

- Implementar autenticação com JWT.
- Adicionar testes automatizados com Jest.
- Criar um frontend integrado ao backend.
- Melhorar o sistema de logs e tratamento de erros.


