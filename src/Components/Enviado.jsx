import React from 'react'
import {enviado} from './Home.module.css'


const Enviado = ({nombre, animal}) => {
  
  return (
    <div className={enviado}>
       <h3>Hola {nombre}! </h3>
        <h2>Tu animal favorito es {animal}</h2>
   </div>
  )
}

export default Enviado