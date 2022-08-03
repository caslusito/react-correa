import Nav from "./navBar"
import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount"

const App = () => {

    const onAdd = () => {
    }

    return (
        <>

            <Nav />

            <ItemListContainer greeting={"Kekeri Camisetas"} />
            <br />
            <ItemCount onAdd={onAdd} init={1} stock={5} />
        </>
    )
}

export default App