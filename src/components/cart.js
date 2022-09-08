import { NavLink } from "react-router-dom"
import { Context } from '../context/CartContext'
import { Button, Center, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"




const Cart = () => {

    const { cartList, removeProduct, cleanCart, totalPrice } = Context()

    if (cartList.length > 0) {
        return (
            <div className='carrito'>
                <div>
                    {
                        cartList.map((element, index) => {
                            return <div className='carritoItems' key={index}>
                                <div className='carritoImage'>
                                    <img src={element.image} alt={element.name} ></img>
                                </div>
                                <div className='carritoDetails'>
                                    <Text m={[5]}>{element.name}</Text>
                                    <Text m={[5]}>${element.price}</Text>
                                    <Text m={[5]}>{element.quantity}</Text>
                                </div>
                                <div className='deleteItem'>
                                    <Button colorScheme='red' onClick={() => removeProduct(element.id)}>X</Button>
                                </div>
                            </div>
                        })
                    }
                </div>
                <Center mt="40px">
                    <Button m={[3]} colorScheme='blue' onClick={cleanCart}>Empty cart</Button>
                    <Link m={[3]} to={'/checkout'}>
                        <Button colorScheme='orange'>Go to checkout</Button>
                    </Link>
                </Center>
                <Center mt="40px">
                    <Text as="b">TOTAL: ${totalPrice()}</Text>
                </Center>
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