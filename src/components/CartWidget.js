import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from 'react';

function CartWidget() {

    const { getItemQty } = useContext(CartContext)

    return (
        <div className='cartWidget'>
            <Link to="/cart">
                <span>
                    < FaShoppingCart />
                </span>
                {getItemQty}
            </Link>
        </div>
    )
}

export default CartWidget

