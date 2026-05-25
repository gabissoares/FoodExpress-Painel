import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Suas credenciais fornecidas pelo Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDfeDWCKFsuSEpOaRKKV7RpVuZ4zXOT1L4",
  authDomain: "foodexpress-painel.firebaseapp.com",
  projectId: "foodexpress-painel",
  storageBucket: "foodexpress-painel.firebasestorage.app",
  messagingSenderId: "75405290362",
  appId: "1:75405290362:web:977350438b5950c8be44c3",
  measurementId: "G-MKL7XQ45QG" // não usado no Firestore, pode manter
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta a instância do Firestore para ser usada nos seus componentes
export const db = getFirestore(app);