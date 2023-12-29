import { useState } from "react"

const ItemCount = (props) => {
    const[count, setCount] = useState(props.valorInicial)

    const incrementarValor= () =>{
        setCount(count+1)
    }

    const decrementarValor=() =>{
        setCount(count-1)
    }
    
    return(
        <div>
            <h1>{count}</h1>
            <p>{props.title}</p>
            <button onClick={decrementarValor}>decrementar</button>
            <button onClick={incrementarValor}>Incrementar</button>
        </div>
    )
}

export default ItemCount