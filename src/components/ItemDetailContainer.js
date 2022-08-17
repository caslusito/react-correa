import { useState, useEffect } from "react"
import { customFetch } from "../assets/customFetch"
import { products } from "../assets/products"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()



    useEffect(() => {
        customFetch(products)
            .then(res => {
                setLoading(true)
                setListProduct(res.find(item => item.id === id))
            })
    }, [id])




    return (
        <>
            {
                loading ?

                    <ItemDetail listProduct={listProduct} />
                    :
                    <p>CARGANDO...</p>
            }
        </>
    )
}


export default ItemDetailContainer