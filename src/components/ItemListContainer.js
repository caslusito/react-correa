import { useState, useEffect } from "react"
import { customFetch } from "../assets/customFetch"
import { productos } from "../assets/productos"
// import ItemCount from "./ItemCount"
import ItemList from "./ItemList"


const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(productos)
            .then(data => {
                setLoading(false)
                setListProducts(data)
            })
    }, [])


    return (
        <>
            <h1 className="titulo">Welcome to {greeting}</h1>

            {!loading
            ?
                <ItemList listProducts={listProducts} />
            :
            <text>cargando...</text>
            }
        </>
    )
}
export default ItemListContainer