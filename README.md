# Todo List API (NestJS + TypeScript)

API de **To-do List** construída com **NestJS** e **TypeScript**, com uma estrutura modular (controller/service/repository) para criar e gerenciar tarefas.

## Funcionalidades

- Criar tarefas (to-dos)
- Marcar como concluída
- Listar, atualizar e remover tarefas *(em evolução)*

## Tecnologias

- **Node.js**
- **NestJS**
- **TypeScript**
- **MongoDB + Mongoose** (camada de persistência)
- **ESLint + Prettier**

## Como rodar o projeto

### Pré-requisitos

- Node.js (recomendado **LTS**)
- npm
- MongoDB em execução (local ou container)

### Instalação

```bash
npm install
```

### Configuração de ambiente

Crie um arquivo `.env` (se o projeto já estiver configurado para isso) com a URL do MongoDB, por exemplo:

```bash
MONGODB_URI=mongodb://localhost:27017/todo
```

> Se você ainda não usa `.env` no projeto, ajuste a string de conexão no módulo de banco/configuração conforme sua implementação.

### Rodar em desenvolvimento

```bash
npm run start:dev
```

### Build

```bash
npm run build
```

### Rodar em produção

```bash
npm run start:prod
```

## Endpoints

### Criar To-do

- **POST** `/todo/create`
- **Body** (JSON):

```json
{
  "name": "Estudar NestJS",
  "description": "Ler documentação e praticar",
  "completed": false
}
```

## Estrutura (visão geral)

- `src/todo/todo.controller.ts`: endpoints HTTP
- `src/todo/services/`: regras de negócio
- `src/todo/repositories/`: acesso ao banco
- `src/todo/Schema/`: schema Mongoose
- `src/todo/interfaces/`: contratos de tipos

## Próximos passos (ideias)

- DTOs + validação com `class-validator`
- CRUD completo (listar/atualizar/remover)
- Paginação e filtros
- Testes (unitários e e2e)