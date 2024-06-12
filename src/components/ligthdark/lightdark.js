import React, {useState} from 'react'

const LightDark = ({children})=>{
    const [lightDark, setLigthDark]= useState('oscuro')
    function cambiarColor(){
    lightDark ==='oscuro'?setLigthDark('claro'):setLigthDark('oscuro')
        
    }
    return(
        <>
        <button onClick ={()=>cambiarColor()}>{lightDark}</button>
    <div className= {lightDark}>
        {children}
    </div>
    </>
)
}
export default LightDark