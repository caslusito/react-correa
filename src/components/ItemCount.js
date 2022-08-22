import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > initial && setCount(count - 1);


    return (
        <div id="compras">
            <button className="botones" onClick={increase}>+</button>
            <p> {count} </p>
            <button className="botones" onClick={decrease}>-</button>
            <button className="botones" onClick={onAdd}>agregar al carrito</button>
        </div>
    )

}

export default ItemCount