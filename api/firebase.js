import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc1-EukUbXt2ICLmq08W7elLhLBpJCvhg",
  authDomain: "appnoticias-be81f.firebaseapp.com",
  projectId: "appnoticias-be81f",
  storageBucket: "appnoticias-be81f.firebasestorage.app",
  messagingSenderId: "896772652699",
  appId: "1:896772652699:web:ba90f4e27407befd32903e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Inicializar y exportar servicios
export const auth = getAuth(app);  // autenticar
export const db = getFirestore(app); // base de datos
export const storage = getStorage(app); // archivos
export { app };