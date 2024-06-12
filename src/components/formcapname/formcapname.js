import React, {useState} from 'react'
const FormCapName=()=>{
    const[nombre,setNombre]=useState('')
    const handleChangeNombre= (event)=>{
        setNombre(event.target.value)
    }
    return(
        <>
       <div>
        <label>
            Nombre:
            <input type='text' value={nombre} onChange={handleChangeNombre}/>
        </label>
        <p>{nombre}</p>
       </div>
        </>
    )
}
export default FormCapName