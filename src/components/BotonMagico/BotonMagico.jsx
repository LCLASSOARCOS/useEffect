import { useState } from "react"


const BotonMagico= ({children, color}) => {

    const[count, setCount] = useState(0)

    const incrementar= () => {
        setCount(count+1)
    }
    const decrementar=()=>{
        setCount(count-1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrementar}>decrementar</button>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export  default BotonMagico