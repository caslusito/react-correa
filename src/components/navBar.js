import { NavLink } from 'react-router-dom'


const navBar = () => {
    return (
        <header id="header">
            <NavLink to="/">
                <img className="logo" src="/../nizar.png" alt="logo nizar"/>
            </NavLink>
            <nav>
                <ul className="navMenu">
                    <li><NavLink to="/category/international ">INTERNATIONAL</NavLink></li>
                    <li><NavLink to="/category/retro">RETRO</NavLink></li>
                    <li><NavLink to="/category/national">NATIONAL</NavLink></li>
                    <li>
                        <NavLink to="cart">
                            <span class="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default navBar