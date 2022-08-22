import { useState, useEffect } from "react"
import { customFetch } from "../assets/customFetch"
import { products } from "../assets/products"
import { useParams } from 'react-router-dom'
import { Spinner , Center } from "@chakra-ui/react"
import ItemList from "./ItemList"


const ItemListContainer = ({ greeting }) => {

    const [listProduct, setListProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()


    useEffect(() => {
        setLoading(true)
        customFetch(products)
            .then(res => {
                if (category) {
                    setLoading(false)
                    setListProduct(res.filter(prod => prod.category === category))
                } else {
                    setLoading(false)
                    setListProduct(res)
                }
            })
    }, [category])


    return (
        <>
            <h1 className="titulo">Welcome {greeting}</h1>
            {!loading
                ?
                <ItemList listProduct={listProduct} />
                :
                <Center mt="40px">
                <Spinner/>
                </Center>
            }
        </>
    )
}
export default ItemListContainer