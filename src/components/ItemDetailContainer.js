import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"
import { Spinner, Center } from "@chakra-ui/react"
import ItemDetail from "./ItemDetail"

const prodCollection = collection(db, "products");


const ItemDetailContainer = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const consulta = getDocs(prodCollection);
        setLoading(false);
        consulta
            .then((snapshot) => {
                const producto = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                    };
                });
                setLoading(true);
                setItem(producto.find((prod) => prod.id === id));
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    return (
        <>
            {
                loading ?
                    <ItemDetail item={item} />
                    :
                    <div>
                        <Center mt={10}>
                            <Spinner />
                        </Center>
                    </div>
            }
        </>
    );
};

export default ItemDetailContainer