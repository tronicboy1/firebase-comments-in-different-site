import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// 必須 : Firebase Consoleで取得した認証情報をここに入れる
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
  projectId: "PROJECT_ID",
  storageBucket: "PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID",
  measurementId: "G-MEASUREMENT_ID",
};

const app = initializeApp(firebaseConfig);

// Realtime Databaseを他で使用するためエクスポートする
export const database = getDatabase(app);
