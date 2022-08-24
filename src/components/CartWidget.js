import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';

function CartWidget() {

    const { getItemQty } = useContext(CartContext)

    return (
        <div>
                <FaShoppingCart itemContent={getItemQty()} />
        </div >
    )
}

export default CartWidget