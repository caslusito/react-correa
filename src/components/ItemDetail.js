import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Button} from '@chakra-ui/react'

const ItemDetail = ({ listProduct }) => {

    const [added, setAdded] = useState(false)
    const onAdd = () => {
        setAdded(true)
    }

    return (
        <>
            <div className="cont">
                <h1 className="tituloPrincipal">{listProduct.name}</h1>
                <img className="img-details" src={listProduct.image} alt={listProduct.name} />
                <h2 className="description">{listProduct.description} </h2>
                <h3 className="price">${listProduct.price}</h3>
                <div>
                    {
                        added ?
                            <Link to='/cart' >
                                <Button className="goToCart" colorScheme='teal' size='sm'>
                                GO TO CART
                                </Button>
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