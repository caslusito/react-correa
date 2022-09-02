import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import { Spinner, Center } from "@chakra-ui/react"
import { db } from "../firebase"
import { toast } from "react-toastify"
import { collection, getDocs, query, where } from "firebase/firestore"




const ItemListContainer = ({ greeting }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()


    useEffect(() => {
        if (!id) {
            const productsCollection = collection(db, "products")
            const consulta = getDocs(productsCollection)

            consulta
                .then(snapshot => {
                    const listProduct = snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    })
                    setListProduct(listProduct)
                    setLoading(false)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            const productsCollection = collection(db, "products")
            const filter = query(productsCollection,
                where("category", "==", id),
                where("stock", ">", 10))
            const consulta = getDocs(filter)

            consulta
                .then(snapshot => {
                    const listProduct = snapshot.docs.map(doc => {
                        return {
                            ...doc.data(),
                            id: doc.id
                        }
                    })
                    setListProduct(listProduct)
                    setLoading(false)
                })
                .catch(err => {
                    toast.error("error al cargar las camisetas")
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
                <ItemList listProduct={listProduct} />
            </>
        )
    }
}
export default ItemListContainer