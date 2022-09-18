import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Spinner, Center } from "@chakra-ui/react"
import { db } from "../firebase"
import { collection, getDocs, query, where } from "firebase/firestore"




const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const productsCollection = collection(db, "products")
        if (!id) {
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
                .catch(err => {
                    console.log(err)
                })
        } else {
            const productsCollection = collection(db, "products")
            const filtro = query(productsCollection,
                where("category", "==", id),
                where("stock", ">", 100))
            const consulta = getDocs(filtro)

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
                .catch(err => {
                    console.log(err)
                })
        }
    }, [id])





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