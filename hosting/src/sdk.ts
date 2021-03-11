import firebase from "firebase/app";
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyBAhgYlAq_eRTNfD6JC0IJ99DK83PGvbbc",
  authDomain: "example-starter-6c1a2.firebaseapp.com",
  projectId: "example-starter-6c1a2",
  storageBucket: "example-starter-6c1a2.appspot.com",
  messagingSenderId: "468338293642",
  appId: "1:468338293642:web:1c89b27d1b5788e8c9a673",
  measurementId: "G-K0WVPCZ1J5"
};

const app = firebase.initializeApp(firebaseConfig);

const firebaseFunctions = app.functions();
firebaseFunctions.useEmulator('localhost', 5001);

export async function helloWorld(): Promise<void> {
  const res = await firebaseFunctions.httpsCallable('helloWorld')({});
  console.log(res);
}
