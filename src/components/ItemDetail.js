import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ listProduct }) => {

    const [qty, setQty] = useState(false)

    const { isInCart, addItem } = useContext(CartContext)

    const onAdd = () => {
        alert(`Cantidad de productos ${qty}`)
        isInCart(listProduct.id)
        addItem(listProduct, qty)
    }

    return (
        <>
            <div className="cont">
                <h1 className="tituloPrincipal">{listProduct.name}</h1>
                <img className="img-details" src={listProduct.image} alt={listProduct.name} />
                <h2 className="description">{listProduct.description} </h2>
                <h3 className="price">${listProduct.price}</h3>
                <div>
                    {
                        qty ?
                            <Link to='/cart' >
                                <Button className="goToCart" colorScheme='teal' size='sm'>
                                    GO TO CART
                                </Button>
                            </Link>
                            :
                            <ItemCount qty={qty} setQty={setQty} initial={1} stock={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>
    )
};

export default ItemDetail