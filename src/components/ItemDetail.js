import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({ listProduct }) => {

    const [added, setAdded] = useState(false)
    const onAdd = () => {
        setAdded(true)
    }

    return (
        <>
            <div>
                <img src={listProduct.image} alt={listProduct.name} />
                <h3>{listProduct.name}</h3>
                <p>{listProduct.details} </p>
                <p>${listProduct.price}</p>
                <div>
                    {
                        added ?
                            <Link to='/cart' >
                                <button>Ir al carrito</button>
                            </Link>
                            :
                            <ItemCount stock={listProduct.stock} initial={1} onAdd={onAdd} />
                    }
                </div>
            </div>
        </>
    )
};

export default ItemDetail