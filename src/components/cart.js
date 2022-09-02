import React, { useContext } from 'react'
import { NavLink } from "react-router-dom"
import { CartContext } from '../context/CartContext'
import { Button, Center, Text } from '@chakra-ui/react'
import { toast } from "react-toastify";



function Cart() {

    const { cart, deleteItem, emptyCart } = useContext(CartContext)

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
                                    <Text m={[5]}>{element.name}</Text>
                                    <Text m={[5]}>${element.price}</Text>
                                    <Text m={[5]}>{element.stock}</Text>
                                </div>
                                <div className='deleteItem'>
                                    <Button colorScheme='red' onClick={() => deleteItem(element.id)}>Delete</Button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <Button m={[2]} colorScheme='blue' onClick={() => emptyCart()}>Empty cart</Button>
                <Button m={[2]} colorScheme='orange' onClick={(res) =>
                    toast.success(`Orden Nº1 creada con exito!`)}>
                    Purchase
                </Button>
            </div>
        )
    }


    return (
        <div>
            <h1 className='margin tituloPrincipal'>No items in the cart</h1>
            <NavLink to={'/'}>
                <Center mt="40px">
                    <Button colorScheme='orange'>Go to Home</Button>
                </Center>
            </NavLink>
        </div>
    )
}

export default Cart