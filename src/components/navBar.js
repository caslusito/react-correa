import CartWidget from "./CartWidget"

const navBar = () => {
    return (
        <header id="header">
            <h1 className="tituloPrincipal">Kekeri Camisetas</h1>
            <CartWidget />
            <nav>
                <ul className="navMenu">
                    <li><a className="" href="#">HOME</a></li>
                    <li><a className="" href="#">FAQ</a></li>
                    <li><a className="" href="#">CONTACT US</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default navBar