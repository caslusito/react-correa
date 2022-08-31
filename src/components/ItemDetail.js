import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ listProduct }) => {

    const [quantity, setQuantity] = useState(false)
    const { addItem, isInCart } = useContext(CartContext)
    const onAdd = () => {
        addItem(listProduct, quantity)
        isInCart(listProduct.id)
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
                        quantity ?
                            <Link to='/cart' >
                                <Button className="goToCart" colorScheme='teal' size='sm'>
                                    GO TO CART
                                </Button>
                            </Link>
                            :
                            <ItemCount quantity={quantity} setQuantity={setQuantity} initial={1} stock={listProduct.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>
    )
};

export default ItemDetail