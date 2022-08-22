import { useState, useEffect } from "react"
import { customFetch } from "../assets/customFetch"
import { products } from "../assets/products"
import { useParams } from "react-router-dom"
import { Spinner, Center } from "@chakra-ui/react"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const { id } = useParams()

    useEffect(() => {
        setLoading(true);
        customFetch(products).then((res) => {
            setLoading(false);
            setListProduct(res.find((item) => item.id === parseInt(id)));
        });
    }, [id]);

    return (
        <>
            {!loading ? (
                <ItemDetail listProduct={listProduct} />
            ) : (
                <Center mt="40px">
                    <Spinner />
                </Center>
            )}
        </>
    );
};

export default ItemDetailContainer