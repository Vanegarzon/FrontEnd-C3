import React from 'react'
//import homeStyles from './Home.module.css'
import {home, titulo, subtitulos } from './Home.module.css'
import Formulario from './Formulario'

//const homeStyle= {display:'flex', flexDirection:'column', justifyContent: 'space-around'}//
//style={homeStyle}//

const Home = () => {
  
    return (
    <div className={home}>
    <Formulario/>
    </div>
  )
}

export default Home