import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);
    const { id } = useParams()

    useEffect(() => {

        const productsCollection = collection(db, "products")
        const ref = doc(productsCollection, id)
        const consulta = getDoc(ref)

        consulta
            .then((res) => {
                setItem(res.data())
            })
            .catch((err) => {
                console.log(err)
            })

    }, [id])

    return (
        <>
            <div>
                <ItemDetail item={item} />
            </div>
        </>
    );
};

export default ItemDetailContainer