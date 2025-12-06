import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase.js";

const db = getFirestore(app);
export { db };

export const getProducts = async () => {
    const documentos = await getDocs(collection(db, "items"));
    const products = [];

    documentos.forEach((doc) => {
        products.push({ 
            ...doc.data(), 
            id: doc.id    
        });
    });
    
    return products;
}
