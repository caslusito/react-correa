import { useState, useEffect } from "react"
import { customFetch } from "../assets/customFetch"
import { products } from "../assets/products"
import ItemList from "./ItemList"
// import ItemCount from "./ItemCount"

const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        customFetch(products)
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
                <p className="texto-cargando">CARGANDO...</p>
            }
        </>
    )
}
export default ItemListContainer