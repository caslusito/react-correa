import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Spinner, Center } from "@chakra-ui/react"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { category } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "products")
        const consulta = getDocs(productsCollection)

        consulta
            .then(snapshot => {
                const products = snapshot.docs.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                })
                setProducts(products)
                setLoading(false)
            })
        if (category === "international") {
            const q = query(collection(db, "products"), where("category", "==", "international"));
            getDocs(q).then((snapshot) => { setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))) })
        } if (category === "selection") {
            const q = query(collection(db, "products"), where("category", "==", "selection"));
            getDocs(q).then((snapshot) => { setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))) })
        }
        if (category === "retro") {
            const q = query(collection(db, "products"), where("category", "==", "retro"));
            getDocs(q).then((snapshot) => { setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))) })
        }
    }, [category])


    if (loading) {
        return (
            <Center mt={10}>
                <Spinner />
            </Center>
        )
    } else {
        return (
            <>
                <h1 className="titulo">Welcome {greeting}</h1>
                <ItemList products={products} />
            </>
        )
    }
}
export default ItemListContainer