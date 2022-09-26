import { NavLink } from "react-router-dom"
import { Text } from '@chakra-ui/react'

const Item = ({ product }) => {

    return (
        <>
            <div>
                <div className="camisetas">
                    <Text as="b">{product.name}</Text>
                    <img className="camisetasImg" src={product.image} alt={product.product} />
                    <Text as="b">${product.price}</Text>
                    <NavLink className="button" to={`/details/${product.id}`}>see details</NavLink>
                    <Text as="b">Available stock : {product.stock}</Text>
                </div>
            </div>
        </>
    )
}
export default Item