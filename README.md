# 🍕 FoodExpress - Painel do Restaurante

Aplicativo mobile (React Native + Expo) para gerenciamento de cardápio em tempo real, integrado ao Cloud Firestore. Desenvolvido como estudo de caso para uma avaliação formadora.

## ✨ Funcionalidades (CRUD + Tickets)

- ✅ **Cadastrar** novo produto (nome, preço, categoria e descrição)
- ✅ **Listar** todos os produtos do cardápio
- ✅ **Atualizar** preço de um produto com validação (não aceita valores ≤ 0)
- ✅ **Remover** produto permanentemente

### Tickets do desafio

| Ticket | Descrição | Status |
|--------|-----------|--------|
| 1 | Adicionar campo **Categoria** (Pizzas, Bebidas, Lanches) | ✅ |
| 2 | Adicionar campo **Descrição** com `multiline` | ✅ |
| 3 | Validar preço na edição (não permitir ≤ 0 ou valores não numéricos) | ✅ |

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Expo](https://expo.dev/) (SDK 52)
- [Firebase Firestore](https://firebase.google.com/docs/firestore) (banco de dados NoSQL em tempo real)
- [React Native Picker](https://github.com/react-native-picker/picker) (seletor de categorias)

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js (v18 ou superior)
- npm ou yarn
- Conta no [Firebase](https://firebase.google.com/) (para obter as credenciais)

### Passos

1. Clone o repositório
   ```bash
   git clone https://github.com/gabissoares/FoodExpress-Painel.git
   cd FoodExpress-Painel/FoodExpress
Instale as dependências

bash
npm install
Configure o Firebase

Crie um projeto no Console do Firebase

Ative o Cloud Firestore no modo de teste

Copie as credenciais do seu aplicativo web

Crie o arquivo src/services/firebaseConfig.ts com o conteúdo:

ts
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
Execute o projeto

bash
npx expo start --web
O aplicativo abrirá no navegador em http://localhost:8081.

Nota: Para testar no celular, utilize npx expo start --tunnel e escaneie o QR code com o aplicativo Expo Go. Em alguns ambientes (como Codespaces), o túnel pode apresentar instabilidade; neste caso, a versão web é totalmente funcional.

📹 Evidências de funcionamento
As seguintes operações foram testadas e registradas em vídeo:

Cadastro de produto com categoria e descrição

Listagem em tempo real

Edição de preço com validação (valor inválido bloqueado, valor válido aceito)

Remoção de produto

📁 Estrutura de pastas
text
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

👩‍💻 Autora
Desenvolvido por gabissoares para a avaliação formadora do curso.