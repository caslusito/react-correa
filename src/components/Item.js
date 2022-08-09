const item = ({ productos }) => {

    return (
        <>
        <div className="camisetas">
        <h2>{productos.title}</h2>
        <img src={productos.image} alt={productos.productos}/>
        <h3>${productos.price}</h3>
        <button>See details</button>
        <h4>Available stock : {productos.stock}</h4>
        </div>
        </>
    )
}
export default item