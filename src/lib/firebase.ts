import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyRCiHH8Ge6fUTegjfUjgLVj88R4qVsDU",
    authDomain: "coddem-dev.firebaseapp.com",
    projectId: "coddem-dev",
    storageBucket: "coddem-dev.appspot.com",
    messagingSenderId: "161933686302",
    appId: "1:161933686302:web:cd5d57960c23d6a377e00f"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const get = async (path: string) => {
    const docRef = doc(db, path);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return docSnap
    } else {
        return false
    }
}