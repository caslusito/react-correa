import ItemCount from "./ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { Button } from '@chakra-ui/react'
import { contexto } from "../context/CartContext";

const ItemDetail = ({ item }) => {

    const [quantity, setQuantity] = useState(false)
    const {addToCart} = useContext(contexto)
    const onAdd = (contador)=>{
        item&&addToCart(item,contador)
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
                        quantity ?
                            <Link to='/cart' >
                                <Button className="goToCart" colorScheme='teal' size='sm'>
                                    GO TO CART
                                </Button>
                            </Link>
                            :
                            <ItemCount quantity={quantity} setQuantity={setQuantity} initial={1} stock={item.stock} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>
    )
};

export default ItemDetail