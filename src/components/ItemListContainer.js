import { useState, useEffect } from "react"
import { customFetch } from "../assets/customFetch"
import { productos } from "../assets/productos"
// import ItemCount from "./ItemCount"
import ItemList from "./ItemList"


const ItemListContainer = ({ greeting }) => {

    const [listProducts, setListProducts] = useState([])
    // const [loading, setLoading] = useState (false)

    useEffect(() => {
        customFetch (productos)
            .then(data => {
                // setLoading (true)
                setListProducts(data)
            })
    }, [])

    console.log (listProducts)


    return (
        <>
            <h1 className="titulo">Welcome to {greeting}</h1>
            <ItemList listProducts={listProducts}/>
            {/* <ItemCount/> */}
        </>
    )
}
export default ItemListContainer