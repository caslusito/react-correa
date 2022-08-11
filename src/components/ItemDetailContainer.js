import { useState, useEffect } from "react"
import { customFetch } from "../assets/customFetch"
import { productos } from "../assets/productos"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        customFetch(productos)
            .then(res => {
                setLoading (false)
                setListProduct(res.find(item => item.id === 1))
            })
    }, [])




    return (
        <>
            {!loading ? <ItemDetail listProduct={listProduct} /> : <p>cargando...</p> }
        </>
    )
}


export default ItemDetailContainer