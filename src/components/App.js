import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import CartWidget from "./CartWidget"
import Nav from "./navBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
    return (
        <BrowserRouter>

            <Nav />

            <Routes>
                <Route path="/" element={<ItemListContainer greeting={"nizar football"} />} />
                <Route path="/category:id" element={<ItemListContainer />} />
                <Route path="/details:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartWidget />} />
            </Routes>

        </BrowserRouter>
    )
}

export default App