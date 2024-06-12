import React,{useState} from 'react'
const Contador = ()=>{
    const [contador,setContador]= useState(0)
    function acumular(){
        setContador(contador + 1)
    }
    return(
        <>
        <button onClick={()=>acumular()}>Acumula</button>
        <div>{contador} </div>
        </>
    )
}
export default Contador