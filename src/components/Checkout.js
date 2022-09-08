import { useState } from 'react'
import { Context } from "../context/CartContext";
import { db } from '../firebase'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { Button, Center, Text, Input } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'




const Checkout = () => {

    const { cartList, totalPrice } = Context()
    const timeOut = useNavigate()
    const [costumer, setCostumer] = useState({

        name: '',
        lastname: '',
        email: '',
        address: '',
    })

    const handlerChangeInput = (e) => {
        setCostumer({
            ...costumer,
            [e.target.name]: e.target.value,
        })

    }

    if (cartList.length === 0) {
        setTimeout(() => {
            timeOut('/')
        }, 3000)
        return (<Center mt={20}>
            <Text fontSize={25}>no products... redirecting to home</Text>
        </Center>)
    }


    const confirm = (e) => {
        e.preventDefault()
        const order = {
            items: cartList,
            buyer: { ...costumer },
            price: totalPrice(),
            date: serverTimestamp()
        }


        const productsCollection = collection(db, "orders")
        const consulta = addDoc(productsCollection, order)
        consulta
            .then((res) => {
                alert(`order ${res.id} created successfully! TOTAL PRICE: $ ${totalPrice()}`)
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            <Center>
                <Text fontSize={35} m={[5]}>enter your data in the form</Text>
            </Center>
            <div>
                <form className='form'>
                    <Input m={[1]}
                        placeholder='name'
                        name="name"
                        value={costumer.name}
                        onChange={handlerChangeInput} />
                    <Input m={[1]}
                        onChange={handlerChangeInput} value={costumer.lastname} placeholder='lastname' name='lastname' />
                    <Input m={[1]} onChange={handlerChangeInput} value={costumer.address} placeholder='address' name='address' />
                    <Input m={[1]} onChange={handlerChangeInput} value={costumer.email} placeholder='email' name='email' />
                </form>
                <Center>
                    <Button m={[5]} colorScheme='green' onClick={confirm} type="submit">finish purchase</Button>
                </Center>
                <hr />
            </div>
        </div>
    )
}
export default Checkout