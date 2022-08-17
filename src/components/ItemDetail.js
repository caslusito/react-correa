// import ItemCount from "./ItemCount"

const itemDetail = ({ listProduct }) => {
    console.log(listProduct)

    return (
        <section className="camisetas">
            <div className="card">
                <h2>{listProduct.title}</h2>
                <img src={listProduct.image} alt={listProduct.productos} />
                <h4>Available stock : {listProduct.stock}</h4>
                <h3>${listProduct.price}</h3>
                {/* <ItemCount stock={6} initial={1} onAdd={2}/> */}
            </div>
        </section>
    )
}
export default itemDetail