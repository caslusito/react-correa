import { Link, NavLink } from 'react-router-dom'
import CartWidget from './CartWidget'


const navBar = () => {
    return (
        <header id="header"><Link to={"/"}> <img className="logo" src="../../nizar.png" alt="logo nizar" /> </Link>
            <nav>
                <ul className="navMenu">
                    <li><NavLink to="/category/international ">INTERNATIONAL</NavLink></li>
                    <li><NavLink to="/category/retro">RETRO</NavLink></li>
                    <li><NavLink to="/category/national">NATIONAL</NavLink></li>
                    <li>
                        <CartWidget />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default navBar