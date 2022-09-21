import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Spinner, Center } from "@chakra-ui/react"
import { db } from "../firebase"
import { collection, getDocs} from "firebase/firestore"

const prodCollection = collection(db, "products");

const ItemListContainer = ({ greeting }) => {
    const [listProducts, setListProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { category } = useParams();

    useEffect(() => {
        const consulta = getDocs(prodCollection);
        setLoading(true);

        consulta
            .then((snapshot) => {
                const producto = snapshot.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id,
                    };
                });
                if (category) {
                    setLoading(false);
                    setListProducts(producto.filter((prod) => prod.category === category));
                } else {
                    setLoading(false);
                    setListProducts(producto);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [category]);

    if (loading) {
        return (
            <Center mt={10}>
                <Spinner />
            </Center>
        )
    } else {
        return (
            <>
                <h1 className="titulo">{greeting}</h1>
                <ItemList listProducts={listProducts} />
            </>
        )
    }
}
export default ItemListContainer