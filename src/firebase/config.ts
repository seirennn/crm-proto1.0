// app/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCAp2r35Xefu_DIJSfR_TMgqL6fArKUwGk",
  authDomain: "crm-prototype-e010d.firebaseapp.com",
  databaseURL: "https://crm-prototype-e010d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crm-prototype-e010d",
  storageBucket: "crm-prototype-e010d.appspot.com",
  messagingSenderId: "1051617118681",
  appId: "1:1051617118681:web:005e2bcdb2cb2c737231c8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

