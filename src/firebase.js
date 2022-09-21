import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyB5pXHNfgLfh5ep3NpSoJZFCwCuk3vfYM8",
    authDomain: "nizar-camisetas.firebaseapp.com",
    projectId: "nizar-camisetas",
    storageBucket: "nizar-camisetas.appspot.com",
    messagingSenderId: "842859875574",
    appId: "1:842859875574:web:6a2442130384d7f35030d7"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

