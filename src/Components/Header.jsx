import React from 'react'

const Header = () => {
  
  const encabezado = ['Inicio ', 'Mensaje']
    return (
    <div>
        {encabezado.map((txto, index) => {
            return <h2 key={index}>{txto}</h2>
        })}


    </div>
  )
}

export default Header