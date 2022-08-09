import Item from "./Item"

const ItemList = ({ listProducts }) => {

    return (
        <>
            {listProducts.map(productos => <Item key={productos.id} productos = {productos} />)}
        </>
    )
}
export default ItemList