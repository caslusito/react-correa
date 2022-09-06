import { createContext , useState, useEffect } from 'react';

export const contexto = createContext();
const { Provider } = contexto;

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [total, setTotal] = useState()

    useEffect(() => {
        var t = 0
        const totals = cart.map(p => p.price * p.amount)
        totals.map(p => t = t + p)
        setTotal(t)
        const cartQuantity = cart.length
        setQuantity(cartQuantity)
    }, [cart])


    function isInCart(id) {
        const item = cart.find(p => p.id === id)
        return item
    }

    function addToCart(product, contador) {
        if (isInCart(product.id)) {
            const oldProduct = cart.find(p => p.id === product.id)
            const cartWithoutOld = cart.filter(item => item.id !== product.id)
            const newProduct = { ...oldProduct }
            newProduct.amount += contador
            cartWithoutOld.push(newProduct)
            setCart(cartWithoutOld)
        } else {
            const newItem = { id: product.id, name: product.name, image: product.image, price: product.price, amount: contador }
            const newCart = [...cart]
            newCart.push(newItem)
            setCart(newCart)
        }
    }




    function eliminateFromCart(id) {
        const newCart = cart.filter(product => product.id !== id)
        setCart(newCart)
    }

    function clearCart() {
        setCart([])
    }

    return (

        <Provider value={{ cart, quantity, total, addToCart, eliminateFromCart, clearCart, isInCart }}>
            {children}
        </Provider>
    )
}
export default CartProvider