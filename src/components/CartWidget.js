import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CartWidget = () => {
    return (
        <NavLink to="/cart">
            <FaShoppingCart />
        </NavLink>
    );
};

export default CartWidget