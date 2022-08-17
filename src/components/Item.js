import { Link } from "react-router-dom"

const item = ({ products }) => {

    return (
        <>
            <div className="camisetas">
                <h2>{products.title}</h2>
                <img src={products.image} alt={products.products} />
                <h3>${products.price}</h3>
                <Link className="button" to={`/details/${products.id} `}>see details</Link>
                <h4>Available stock : {products.stock}</h4>
            </div>
        </>
    )
}
export default item