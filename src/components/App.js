import { ChakraProvider } from "@chakra-ui/react";
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./cart"
import Nav from "./navBar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MyProvider from "../context/CartContext";
import "../firebase.js"


const App = () => {
    return (
        <MyProvider>
            <ChakraProvider>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer greeting={"nizar football"} />} />
                        <Route exact path="/details/:id" element={<ItemDetailContainer />} />
                        <Route exact path="/category/:category" element={<ItemListContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                    </Routes>
                </BrowserRouter>
            </ChakraProvider>
        </MyProvider>
    )
}

export default App