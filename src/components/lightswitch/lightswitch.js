import * as React from 'react'
import * as styles from './lightswitch.module.css'

const LightSwitch = ()=>{
    function alternarLuces(){
    const bodyStyle= document.body.style
     bodyStyle.backgroundColor==='black'? bodyStyle.backgroundColor= 'white': bodyStyle.backgroundColor= 'black' 
    }
    return(
        <button className={styles.btn} onClick={alternarLuces}> Alterna las luces</button>
    )
}
export default LightSwitch