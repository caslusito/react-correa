import ItemCount from "./ItemCount"

const itemDetail = ({ listProduct }) => {

    return (
        <section className="camisetas">
            <h2>{listProduct.title}</h2>
            <img src={listProduct.image} alt={listProduct.productos} />
            <h4>Available stock : {listProduct.stock}</h4>
            <button>See details</button>
            <h3>${listProduct.price}</h3>
            {/* <ItemCount stock={6} initial = {1} onAdd={2}/> */}
        </section>
    )
}
export default itemDetail