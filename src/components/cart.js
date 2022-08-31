import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { Button, Center } from '@chakra-ui/react'


function Cart() {

    const { cart, deleteItem } = useContext(CartContext)

    if (cart.length > 0) {
        return (
            <div className='carrito'>
                <div>
                    {
                        cart.map((element, index) => {
                            return <div className='carritoItems' key={index}>
                                <div className='carritoImage'>
                                    <img src={element.image} alt={element.name} ></img>
                                </div>
                                <div className='carritoDetails'>
                                    <h3>{element.name}</h3>
                                    <h2>price : ${element.price}</h2>
                                    <h3>quantity : {element.quantity}</h3>
                                </div>
                                <div className='deleteItem'>
                                    <Button colorScheme='red' onClick={() => deleteItem(element.id)}>Delete</Button>
                                </div>
                            </div>
                        })
                    }
                </div>
                {/* <div>
                    <Button colorScheme='blue' onClick={() => emptyCart()}>Empty cart</Button>
                </div>
                <div>
                    <Link to={'/checkout'}><Button colorScheme='blue'>Go to Checkout</Button></Link>
                </div> */}
            </div>
        )
    }

    return (
        <div>
            <h1 className='margin tituloPrincipal'>No items in the cart</h1>
            <Link to={'/'}>
                <Center mt="40px">
                    <Button colorScheme='orange'>Go to Home</Button>
                </Center>
            </Link>
        </div>
    )
}

export default Cart