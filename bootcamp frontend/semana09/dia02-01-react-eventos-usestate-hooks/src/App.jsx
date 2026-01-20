import './estilos.css'

import Contador from './components/Contador'
import MostrarTexto from './components/MostrarTexto'

// NOTE: Para añadir estilos a un componente podemos usar el atributo className

const App = () => {
  return (
    <div>
      <h1 className="textoBlanco">app</h1>
      <p style={{ backgroundColor: 'yellow', padding: '1rem' }}>Hola mundo</p>

      <div className='text-3xl text-center p-8 bg-orange-500 text-white'>Tailwind CSS</div>

      <Contador />
      <MostrarTexto />
    </div>
  )
}

export default App