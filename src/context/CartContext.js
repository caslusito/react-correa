import { createContext, useState } from "react"

export const CartContext = createContext()

const { Provider } = CartContext

const MyProvider = ({ children }) => {

    const [Cart, SetCart] = useState([])

    const IsInCart = (id) => {

        return Cart.some(x => x.id === id)
    }
    const AddItem = (item, qty) => {

        const NewItem = {
            ...item,
            qty
        }

        if (IsInCart(NewItem.id)) {
            const findProduct = Cart.find(x => x.id === NewItem.id)
            const productIndex = Cart.indexOf(findProduct)
            const auxArray = [...Cart]
            auxArray[productIndex].qty += qty
            SetCart(auxArray)
        }

        else {
            SetCart([...Cart, NewItem])
        }


    }

    const EmptyCart = () => {

        return SetCart([])

    }

    const DeleteItem = (id) => {

        return SetCart(Cart.filter(x => x.id !== id))

    }

    const GetItemQty = () => {

        return Cart.reduce((acc, x) => acc += x.qty, 0)

    }

    const GetItemPrice = () => {

        return Cart.reduce((acc, x) => acc += x.qty * x.price, 0)

    }



    return <Provider value={{ Cart, IsInCart, AddItem, EmptyCart, DeleteItem, GetItemQty, GetItemPrice }}>{children}</Provider>

}

export default MyProvider