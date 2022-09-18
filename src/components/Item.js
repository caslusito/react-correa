import { NavLink } from "react-router-dom"

const Item = ({ product }) => {

    return (
        <>
            <div>
                <div className="camisetas">
                <h2>{product.name}</h2>
                <img className="camisetasImg" src={product.image} alt={product.product} />
                <h3>${product.price}</h3>
                <NavLink className="button" to={`/details/${product.id}`}>see details</NavLink>
                <h4>Available stock : {product.stock}</h4>
                </div>
            </div>
        </>
    )
}
export default Item