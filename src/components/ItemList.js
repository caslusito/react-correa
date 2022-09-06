import Item from "./Item"

const ItemList = ({ products }) => {
    return (
        <>
            {products.map((products) => (
                <Item key={products.id} product={products} />
            ))}
        </>
    );
};

export default ItemList