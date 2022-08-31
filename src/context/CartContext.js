import { createContext, useState } from "react";

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    const addItem = (item, quantity) => {

        const newItem = {
            ...item,
            quantity
        }

        if (isInCart(newItem.id)) {
            const findProduct = cart.find(x => x.id === newItem.id)
            const productIndex = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[productIndex].quantity += quantity
            setCart(auxArray)
        } else {
            setCart([...cart, newItem])
        }
    }

    const emptyCart = () => {
        return setCart([])
    }

    const deleteItem = (id) => {
        return setCart(cart.filter(x => x.id !== id))
    }

    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.quantity, 0)
    }

    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.quantity * x.price, 0)
    }


    return <Provider value={{ cart, isInCart, addItem, emptyCart, deleteItem, getItemQty, getItemPrice }}>{children}</Provider>

}

export default MyProvider