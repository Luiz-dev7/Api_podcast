# API Podcast

## Visão Geral

Esta API foi desenvolvida em **Node.js com TypeScript**, utilizando **apenas módulos nativos do Node (HTTP)**, sem frameworks como Express. O objetivo da aplicação é disponibilizar dados de podcasts e seus episódios, permitindo listagem geral e filtragem por categoria.

O projeto segue uma organização em camadas (**controllers, services, repositories e utils**), promovendo clareza, separação de responsabilidades e fácil manutenção.

---

## Tecnologias Utilizadas

* Node.js (HTTP nativo)
* TypeScript
* dotenv

---

## Configuração do Ambiente

### Variáveis de Ambiente (.env)

```env
PORT=3333
```

A porta configurada é utilizada pelo servidor HTTP no momento da inicialização.

---

## Como Executar o Projeto

### Pré-requisitos

* Node.js (versão 18 ou superior recomendada)
* npm

### Instalação das dependências

```bash
npm install
```

### Executar em ambiente de desenvolvimento

```bash
npm run dev
```

A API ficará disponível em:

```
http://localhost:3333
```

---

## Estrutura de Pastas

```
Api_podcast-main/
 ├── docs/
 │    ├── app.md
 │    └── assets/
 │         └── Sem título.png
 ├── src/
 │    ├── controllers/
 │    │    └── podcasts-controller.ts
 │    ├── models/
 │    │    ├── podcast-model.ts
 │    │    └── filter-model.ts
 │    ├── repositories/
 │    │    ├── podcast-repositore.ts
 │    │    └── podcast.json
 │    ├── routes/
 │    │    └── routes.ts
 │    ├── services/
 │    │    ├── listEpisodes.ts
 │    │    └── filterEpisodes.ts
 │    ├── utils/
 │    │    ├── content-type.ts
 │    │    ├── httpMethods.ts
 │    │    └── status-code.ts
 │    ├── app.ts
 │    └── server.ts
 ├── .env
 ├── package.json
 ├── tsconfig.json
 └── README.md
```

---

## Arquitetura da Aplicação

### server.ts

Responsável por criar e iniciar o servidor HTTP, lendo a porta definida no `.env`.

### app.ts

Centraliza a lógica principal da aplicação, integrando as rotas e controlando o fluxo das requisições.

### routes

Define as rotas disponíveis e faz o direcionamento para os controllers adequados.

### controllers

Recebem as requisições HTTP, tratam os parâmetros e retornam as respostas apropriadas.

### services

Contêm a lógica de negócio da aplicação, como listagem e filtragem de episódios.

### repositories

Responsáveis pelo acesso aos dados, que neste projeto são armazenados em um arquivo JSON.

### utils

Conjunto de utilitários usados em toda a aplicação, incluindo:

* Definição de métodos HTTP
* Content-Type das respostas
* Padronização de códigos de status HTTP

---

## Endpoints

### 🔹 Listar todos os episódios

**GET** `/episodes`

Retorna todos os episódios de podcasts cadastrados.

#### Response (200)

```json
{
  "status": "success",
  "data": [
    {
      "podcastName": "Nome do Podcast",
      "episode": "Nome do Episódio",
      "videoId": "abc123",
      "categories": ["tecnologia", "backend"]
    }
  ]
}
```

---

### 🔹 Filtrar episódios por categoria

**GET** `/episodes?category=backend`

Retorna apenas os episódios que pertencem à categoria informada.

#### Parâmetros de Query

| Nome     | Tipo   | Obrigatório | Descrição             |
| -------- | ------ | ----------- | --------------------- |
| category | string | Sim         | Categoria do episódio |

#### Response (200)

```json
{
  "status": "success",
  "data": []
}
```

#### Response (404)

```json
{
  "status": "error",
  "message": "Nenhum episódio encontrado"
}
```

---

## Modelos de Dados

### PodcastModel

```ts
{
  podcastName: string;
  episode: string;
  videoId: string;
  categories: string[];
}
```

### FilterModel

```ts
{
  category: string;
}
```

---

## Boas Práticas Utilizadas

* Uso de TypeScript com tipagem explícita
* Separação clara de responsabilidades
* Uso de HTTP nativo para melhor entendimento do core do Node.js
* Organização modular do projeto

---

## Possíveis Evoluções

* Implementação de documentação Swagger/OpenAPI
* Paginação de resultados
* Testes automatizados
* Persistência em banco de dados

---

## Considerações Finais

Este projeto demonstra domínio do funcionamento interno do Node.js, sem dependência de frameworks, sendo adequado tanto para fins acadêmicos quanto para portfólio profissional.
