import { Link } from "react-router-dom"

const navBar = () => {
    return (
        <header id="header">

            <Link to="/">
                <img className="logo" src="../../nizar.png" alt="logo kekeri" />
            </Link>

            <nav>
                <ul className="navMenu">
                    {/* <li><Link to="faq">FAQ</Link></li>
                    <li><Link to="contact">CONTACT US</Link></li> */}
                    <li><Link to="/category/international">INTERNATIONAL</Link></li>
                    <li><Link to="/category/retro">RETRO</Link></li>
                    <li><Link to="/category/national">NATIONAL</Link></li>
                    <li>
                        <Link to="cart">
                            <span class="material-symbols-outlined">
                                shopping_cart
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default navBar