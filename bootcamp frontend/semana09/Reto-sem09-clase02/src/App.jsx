import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Perfiles from './profile.jsx'




const App = () => {
  return (
    <div>
      <h4>Roles del equipo</h4>
      
      <Perfiles nombre="Eduardo" rol="Frontend" />
      <Perfiles nombre="Victor" rol="Frontend" />
      <Perfiles nombre="Alex" rol="Frontend" />
      <Perfiles nombre="coco" />
    </div>
  )
}


export default App