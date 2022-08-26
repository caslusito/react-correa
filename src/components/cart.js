import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Button } from '@chakra-ui/react'


function Cart() {

    const [checkout, setCheckout] = useState(false)

    const { cart, deleteItem, emptyCart } = useContext(CartContext)

    if (cart.length > 0) {
        return (
            <div>
                <div>
                    {
                        cart.map((element, index) => {
                            return <div key={index}>
                                <div>
                                    <img src={element.image} alt={element.title} ></img>
                                </div>
                                <div>
                                    <h3>{element.tittle}</h3>
                                    <h2>Precio: ${element.price}</h2>
                                    <h3>Unidades: {element.stock}</h3>
                                </div>
                                <div>
                                    <button onClick={() => deleteItem(element.id)} className='btn btn-danger'>Delete</button>
                                </div>
                            </div>
                        })
                    }
                    <button onClick={() => emptyCart()} className='btn btn-warning'>Vaciar Carrito</button>
                </div>
                <div>
                    <Link to={'/checkout'}><button colorScheme='blue'>Ir al Checkout</button></Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h1>Este es tu carrito</h1>
            <Link to={'/'}><Button colorScheme='orange'>Ir a la Home</Button></Link>
        </div>
    )
}

export default Cart