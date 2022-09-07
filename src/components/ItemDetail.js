import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import { Context } from "../context/CartContext";

const ItemDetail = ({ item }) => {

    const [added, setAdded] = useState(false)

    const { addToCart } = Context()

    const onAdd = (quantity) => {
        addToCart(item, quantity)
        setAdded(true)
    }

    return (
        <>
            <div className="cont">
                <h1 className="tituloPrincipal">{item.name}</h1>
                <img className="img-details" src={item.image} alt={item.name} />
                <h2 className="description">{item.description} </h2>
                <h3 className="price">${item.price}</h3>
                <div>
                    {
                        added ?
                            <Link to='/cart' >
                                <Button className="goToCart" colorScheme='teal' size='sm'>
                                    GO TO CART
                                </Button>
                            </Link>
                            :
                            <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>
    )
};

export default ItemDetail