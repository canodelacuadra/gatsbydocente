import React,{useState, useEffect} from "react"
const Alumno = ()=>{
    const [economia, setEconomia]=useState(-500)
    const [felicidad, setFelicidad]= useState(false)

    const darDinero= ()=>{
        setEconomia(economia+100)
    }
    const hacerfeliz= ()=>{
        !felicidad ?setFelicidad(true):setFelicidad(false)
    }

    return(
        <>
        <button onClick={darDinero}>hazme rico</button>
        <p> El alumno es {economia}</p>
        <button onClick={hacerfeliz}>hazme feliz</button>
        <p>{felicidad && <p>Soy mas feliz que una perdiz</p>}</p>
       
        </>

    )

}
export default Alumno