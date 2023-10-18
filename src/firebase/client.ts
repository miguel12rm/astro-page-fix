import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "mi-clave-publica-de-la-api",
  authDomain: "mi-dominio-autentificado",
  projectId: "el-id-de-mi-proyecto",
  storageBucket: "mi-bucket-de-almacenamiento",
  messagingSenderId: "el-id-de-mi-emisor",
  appId: "el-id-de-mi-app",
};

export const app = initializeApp(firebaseConfig);