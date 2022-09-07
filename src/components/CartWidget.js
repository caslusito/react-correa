import { Context } from "../context/CartContext";
import { Link } from 'react-router-dom';



const CartWidget = () => {

        const { totalQuantity } = Context()

        return (
                <div className='cartWidget'>
                        <Link to="/cart">
                                <span className="material-symbols-outlined">
                                        shopping_cart
                                </span>
                                {totalQuantity()}
                        </Link>
                </div>
        )


}

export default CartWidget

