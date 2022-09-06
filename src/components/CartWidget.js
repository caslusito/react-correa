import { contexto } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';

function CartWidget() {

        const { quantity } = UseContext(contexto)

        return (
                <div className='cartWidget'>
                        <Link to="/cart">
                                < FaShoppingCart />
                                {quantity}
                        </Link>
                </div>
        )


}

export default CartWidget

