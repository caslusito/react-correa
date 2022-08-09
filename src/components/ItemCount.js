import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {

    const [contador, setCount] = useState(initial);

    const añadirAlCarrito = () => contador < stock && setCount(contador + 1);
    const removerDelCarrito = () => contador > initial && setCount(contador - 1);
    const comprar = () => setCount (0);


    return (
        <div id="compras">
            <p>El carrito tiene {contador} articulos</p>
            <button className="botones" onClick={añadirAlCarrito}>añadir al carrito</button>
            <button className="botones" disabled={stock === 0 && "disabled"} onClick={comprar}>comprar los productos</button>
            <button className="botones" onClick={removerDelCarrito}>remover del carrito</button>
        </div>
    )

}

export default ItemCount