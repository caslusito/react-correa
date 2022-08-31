import { Button } from '@chakra-ui/react'
import { useState } from 'react';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [Count, setCount] = useState(initial);

    const increase = () => {
        if (Count < stock) {
            setCount(Count + 1)
        }

    }
    const decrease = () => {
        setCount(Count - 1)
        if (Count <= 0) {
            setCount(0)
            console.log("Ya no hay más")
        }
    }

    const Agree = () => {
        onAdd(Count)
    }



    return (
        <div className="itemCount">
            <h3 className="count"> {Count} </h3>
            <div className="itemCountCounter">
                <Button className="countCart" colorScheme='blue' onClick={increase}>+</Button>
                <Button className="countCart" colorScheme='blue' onClick={decrease}>-</Button>
            </div>
            <Button className="addToCart" colorScheme='orange' onClick={Agree}>ADD TO CART</Button>
        </div>
    )

}

export default ItemCount