import Item from "./Item"

const ItemList = ({ listProducts }) => {

    return (
        <>
            {listProducts.map(products => <Item key={products.id} products={products} />)}
        </>
    )
}
export default ItemList