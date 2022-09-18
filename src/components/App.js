import { ChakraProvider } from "@chakra-ui/react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import Cart from "./cart"
import Nav from "./navBar"
import Checkout from "./Checkout"
import Context from "../context/CartContext";
import 'react-toastify/dist/ReactToastify.css';
import "../firebase.js"


const App = () => {
    return (
        <Context>
            <ChakraProvider>
                <BrowserRouter>
                    <Nav />
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer greeting={"nizar football"} />} />
                        <Route exact path="/details/:id" element={<ItemDetailContainer />} />
                        <Route exact path="/category/:category" element={<ItemListContainer />} />
                        <Route exact path="/cart" element={<Cart />} />
                        <Route exact path="/Checkout" element={<Checkout />} />
                    </Routes>
                </BrowserRouter>
                <ToastContainer />
            </ChakraProvider>
        </Context>
    )
}

export default App