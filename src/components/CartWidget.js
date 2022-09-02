import { Context } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Text } from '@chakra-ui/react';

function CartWidget() {

        const { totalQuantity } = Context()

        return (
                <NavLink to="/cart">
                        < FaShoppingCart />
                        <Text className='badge' fontSize='xs'>{totalQuantity()}</Text>
                </NavLink>
        )
}

export default CartWidget

