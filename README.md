# 🍕 FoodExpress — Painel do Restaurante

Aplicativo mobile desenvolvido com **React Native + Expo** para gerenciamento de cardápio em tempo real, utilizando o **Cloud Firestore** como banco de dados.  
O projeto foi criado como estudo de caso para uma avaliação formadora, com foco em operações CRUD, validações e integração com Firebase.

---

## 📱 Preview do Projeto

Sistema simples e intuitivo para restaurantes gerenciarem produtos do cardápio em tempo real.

### Funcionalidades principais:
- ➕ Cadastro de produtos
- 📋 Listagem automática em tempo real
- ✏️ Atualização de preços
- 🗑️ Remoção permanente de itens
- 🧩 Organização por categorias

---

# ✨ Funcionalidades

## ✅ CRUD Completo

- ➕ **Cadastrar** novo produto
- 📋 **Listar** produtos em tempo real
- ✏️ **Atualizar** preço dos produtos
- 🗑️ **Remover** produtos permanentemente

---

## 📌 Campos do Produto

Cada produto possui:

- Nome
- Preço
- Categoria
- Descrição

---

# 🎟️ Tickets do Desafio

| Ticket | Descrição | Status |
|--------|-----------|--------|
| 1 | Adicionar campo **Categoria** (Pizzas, Bebidas, Lanches) | ✅ Concluído |
| 2 | Adicionar campo **Descrição** utilizando `multiline` | ✅ Concluído |
| 3 | Validar preço na edição (não permitir ≤ 0 ou valores inválidos) | ✅ Concluído |

---

# 🛠️ Tecnologias Utilizadas

- ⚛️ React Native
- 📘 TypeScript
- 🚀 Expo SDK 52
- 🔥 Firebase Firestore
- 🧩 React Native Picker

---

# 📂 Estrutura do Projeto

```text
FoodExpress/
├── src/
│   ├── screens/
│   │   ├── CadastroScreen.tsx
│   │   └── ListagemScreen.tsx
│   └── services/
│       └── firebaseConfig.ts
├── App.tsx
├── app.json
├── index.js
├── package.json
└── tsconfig.json
```

---

# 🚀 Como Executar o Projeto

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- Node.js (v18 ou superior)
- npm ou yarn
- Expo CLI
- Conta no Firebase

---

# 🔧 Instalação

## 1️⃣ Clone o repositório

```bash
git clone https://github.com/gabissoares/FoodExpress-Painel.git
```

## 2️⃣ Acesse a pasta do projeto

```bash
cd FoodExpress-Painel/FoodExpress
```

## 3️⃣ Instale as dependências

```bash
npm install
```

---

# 🔥 Configuração do Firebase

## 1️⃣ Crie um projeto no Firebase

Acesse o console do Firebase e crie um novo projeto.

## 2️⃣ Ative o Cloud Firestore

Configure o Firestore no modo de teste.

## 3️⃣ Obtenha as credenciais

Copie as credenciais do aplicativo Web no painel do Firebase.

## 4️⃣ Crie o arquivo:

```text
src/services/firebaseConfig.ts
```

## 5️⃣ Adicione a configuração:

```ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
```

---

# ▶️ Executando o Aplicativo

## 🌐 Rodar no navegador

```bash
npx expo start --web
```

O aplicativo abrirá em:

```text
http://localhost:8081
```

---

## 📱 Rodar no celular

```bash
npx expo start --tunnel
```

Depois:

- Abra o aplicativo **Expo Go**
- Escaneie o QR Code exibido no terminal

> ⚠️ Em alguns ambientes, como Codespaces, o túnel pode apresentar instabilidade.  
> Nesse caso, utilize a versão web normalmente.

---

# 📹 Evidências de Funcionamento

As seguintes funcionalidades foram testadas e registradas em vídeo:

- ✅ Cadastro de produto
- ✅ Seleção de categoria
- ✅ Campo de descrição multilinha
- ✅ Listagem em tempo real
- ✅ Edição de preço com validação
- ✅ Bloqueio de valores inválidos
- ✅ Remoção permanente de produtos

---

# 💡 Aprendizados do Projeto

Durante o desenvolvimento deste projeto, foram praticados conceitos como:

- CRUD com Firestore
- Integração React Native + Firebase
- Gerenciamento de estado
- Componentização
- Validação de formulários
- Atualização em tempo real
- Estruturação de projeto mobile

---

# 👩‍💻 Autora

Desenvolvido por **Gabriele Soares** para a avaliação formadora do curso.

🔗 GitHub: https://github.com/gabissoares
