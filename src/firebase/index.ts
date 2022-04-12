import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";

// 必須 : Firebase Consoleで取得した認証情報をここに入れる
const firebaseConfig = {
  apiKey: "AIzaSyC2nuA1NE2iZc5LXW9D36e0B1bIlJ6FVVI",
  authDomain: "realtime-comments-22c1f.firebaseapp.com",
  databaseURL: "https://realtime-comments-22c1f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtime-comments-22c1f",
  storageBucket: "realtime-comments-22c1f.appspot.com",
  messagingSenderId: "220482101835",
  appId: "1:220482101835:web:f83c86e46be084802923ce"
};

const app = initializeApp(firebaseConfig);

// Realtime Databaseを他で使用するためエクスポートする
export const database = getDatabase(app);
