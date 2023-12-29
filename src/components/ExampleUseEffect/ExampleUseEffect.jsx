import { useEffect, useState } from "react"


const ExampleUseEffect = () => {
    const[newRender, setNewRender] = useState(false)
    const[otherNewRender, setOtherNewRender] = useState(false)
    
    useEffect(()=>{
        console.log('llamado a api de paises')
    },[otherNewRender])

    console.log('fuera de useEffect')

    return(
            <>
                <button onClick={()=>setNewRender(prev => !prev)}>cambiar estado</button>
                <button onClick={()=>setOtherNewRender(prev => !prev)}>cambiar otro estado</button>
                <h1>esto es un ejemplo de useEffect</h1>
            </>
    )
}

export default ExampleUseEffect