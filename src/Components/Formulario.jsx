import {useState} from 'react'
import Enviado from './Enviado'
import Mensaje from './Mensajes'
import { titulo, formulario} from './Home.module.css'

const Formulario = () => {
const [animal, setAnimal] = useState('')
const [nombre, setNombre] = useState('')

const [show, setShow] = useState(false)
const [error, setError] = useState(false)

const handleSubmit = (event)=> {
 event.preventDefault()

 if(nombre.length > 5 && animal.length > 5 && nombre.includes(" "))
 { setError(false)
    setShow(true);
    
} else{
    setError(true)}
}
  return (
    <div className={formulario}>
        <form onSubmit={handleSubmit}>
    <label className={titulo}>Elige Tu Animal Favorito</label>
        <input type="text" value={animal} onChange={(event) => setAnimal(event.target.value)}/>
    
    <label className={titulo}>Ingresa tu nombre completo</label>
    
        <input type="text"value={nombre} onChange={(event) => setNombre(event.target.value.trimStart())} />
       <button>ENVIAR</button>
</form>

{show ?

<Enviado nombre={nombre} animal={animal} />
:
null}
{error &&
<Mensaje nombre={nombre}/>}

</div>
)
}

export default Formulario