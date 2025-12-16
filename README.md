# 🎙️ Podcast Package Multimanager

## 📌 Visão Geral

O **Podcast Multimanage** é uma **API REST** desenvolvida em **Node.js com TypeScript**, inspirada em plataformas de streaming como **Netflix** e **HBO**. Seu objetivo é **centralizar, organizar e disponibilizar podcasts em formato de vídeo**, oferecendo dados estruturados para fácil consumo por aplicações **front-end web ou mobile**.

A API trabalha exclusivamente com **HTTP nativo do Node.js**, sem o uso de frameworks, evidenciando o domínio do funcionamento interno da plataforma.

---

## 🎯 Objetivo do Projeto

Fornecer uma API capaz de:

* 📂 Listar episódios de podcasts
* 🏷️ Organizar conteúdos por categorias
* 🔍 Filtrar episódios por nome do podcast
* 🔗 Facilitar a integração com aplicações consumidoras

Este projeto possui foco **educacional e profissional**, servindo como base para estudos de arquitetura de APIs e construção de portfólio.

---

## 🌐 Domínio da Aplicação

* Podcasts em **formato de vídeo**
* Conteúdos hospedados principalmente no **YouTube**
* Organização por **categorias temáticas**

---

## 🚀 Funcionalidades

* 📚 Listagem de episódios de podcasts
* 🏷️ Classificação por categorias

  * Exemplos:

    * Mentalidade
    * Humor
    * Saúde
    * Tecnologia
    * Fitness
    * Esporte
* 🔍 Filtro de episódios pelo **nome do podcast**
* 🖼️ Exibição de imagem de capa do episódio
* 🔗 Acesso direto ao vídeo no YouTube

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **HTTP nativo do Node**
* Arquitetura **REST**
* Retorno de dados em **JSON**
* Uso de **dotenv** para variáveis de ambiente

---

## ⚙️ Configuração do Ambiente

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
```

---

## ▶️ Como Executar o Projeto

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

A API estará disponível em:

```text
http://localhost:3333
```

---

## 🔌 Endpoints da API

### 📍 Listar todos os episódios

```http
GET /api/list
```

📌 Retorna todos os episódios cadastrados.

---

### 🔍 Filtrar episódios por podcast

```http
GET /api/episode?p=flow
```

📌 Retorna apenas os episódios do podcast informado via **query string**.

#### Parâmetros de Query

| Parâmetro | Tipo   | Obrigatório | Descrição       |
| --------- | ------ | ----------- | --------------- |
| p         | string | Sim         | Nome do podcast |

---

## 📦 Estrutura de Dados (Exemplo de Retorno)

```ts
[
  {
    podcastName: "flow",
    episode: "RUBINHOS BARRICHELO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categorie: ["esporte", "corrida"]
  },
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categorie: ["saúde", "esporte", "bodybuilder"]
  }
]
```

---

## 🧠 Funcionamento Interno (Core da Aplicação)

A aplicação utiliza o módulo **HTTP nativo do Node.js** para roteamento e controle de requisições:

```ts
import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { routes } from "./routes/routes";
import { HttpMethod } from "./utils/httpMethods";
import * as http from "http";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  // Exemplo de query string:
  // http://localhost:3333/api/episode?p=flow

  const baseUrl = request.url?.split("?")[0];

  if (request.method === HttpMethod.GET && baseUrl === routes.LIST) {
    await getListEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === routes.episode) {
    await getFilterEpisodes(request, response);
  }
};
```

---

## 📁 Organização do Projeto

```
src/
├── controllers/      # Camada de controle das requisições
│   └── podcasts-controller.ts
├── routes/           # Definição das rotas da API
│   └── routes.ts
├── services/         # Regras de negócio
├── repositories/     # Acesso aos dados
├── utils/            # Funções utilitárias e enums
│   └── httpMethods.ts
├── app.ts            # Núcleo da aplicação
└── server.ts         # Inicialização do servidor HTTP
```

---

## 🔮 Roadmap (Próximas Evoluções)

* 🔢 Paginação de episódios
* 🔐 Autenticação e autorização
* ⭐ Sistema de favoritos
* 🏷️ Busca e filtro por categorias
* 📱 Integração com aplicações front-end (React / React Native)
* 📑 Documentação Swagger / OpenAPI

---

## 📄 Licença

Este projeto é de uso livre para **fins educacionais e aprendizado**, podendo ser adaptado e expandido conforme necessidade.
