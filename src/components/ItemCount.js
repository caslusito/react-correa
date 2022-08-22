import { useState } from "react"
import { Button } from '@chakra-ui/react'

const ItemCount = ({ initial, stock, onAdd }) => {

    const [count, setCount] = useState(initial);

    const increase = () => count < stock && setCount(count + 1);
    const decrease = () => count > initial && setCount(count - 1);


    return (
        <div className="itemCount">
                <h3 className="count"> {count} </h3>
            <div className="itemCountCounter">
                <Button className="countCart" colorScheme='blue' onClick={increase}>+</Button>
                <Button className="countCart" colorScheme='blue' onClick={decrease}>-</Button>
            </div>
                <Button className="addToCart" colorScheme='orange' onClick={onAdd}>ADD TO CART</Button>
        </div>
    )

}

export default ItemCount