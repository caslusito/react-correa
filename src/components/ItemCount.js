import { Button } from '@chakra-ui/react'

const ItemCount = ({ qty, setQty, stock, onAdd }) => {

    const decrease = () => {
        if (qty > 1) {
            setQty(qty - 1)
        }
    }

    const increase = () => {
        if (qty < stock) {
            setQty(qty + 1)
        }
    }


    return (
        <div className="itemCount">
            <h3 className="count"> {qty} </h3>
            <div className="itemCountCounter">
                <Button className="countCart" colorScheme='blue' onClick={increase}>+</Button>
                <Button className="countCart" colorScheme='blue' onClick={decrease}>-</Button>
            </div>
            <Button className="addToCart" colorScheme='orange' onClick={onAdd}>ADD TO CART</Button>
        </div>
    )

}

export default ItemCount