import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [contador, setCount] = useState(1);

    const añadirAlCarrito = () => contador < stock && setCount(contador + 1);
    const removerDelCarrito = () => contador > initial & setCount(contador - 1);
    const comprar = () => setCount (0);

    return (
        <div id="compras">
            <p>El carrito tiene {contador} articulos</p>
            <button className="botones" onClick={añadirAlCarrito}>añadir al carrito</button>
            <button className="botones" onClick={comprar}>comprar los productos</button>
            <button className="botones" onClick={removerDelCarrito}>remover del carrito</button>
        </div>
    )

}

export default ItemCount