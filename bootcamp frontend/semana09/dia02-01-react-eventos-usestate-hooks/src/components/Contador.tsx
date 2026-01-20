import { useState } from "react"

const Contador = () => {
  // const [valor, function] = useState(inicializador)

  const [contador, setContador] = useState(3)

  const increment = () => {
    setContador(contador + 1)
  }

  const decrement = () => {
    setContador(contador - 1)
  }

  return (
    <div className="bg-yellow-400 p-8 m-4">
      <h1 className="!bg-transparent">Contador</h1>

      <div className="flex gap-4">
        <button onClick={increment}>+1</button>
        <span>{contador}</span>
        <button onClick={decrement}>-1</button>
      </div>
    </div>
  )
}


// Ejemplo que no debemos hacer para manejar los estados

// const Contador = () => {
//   let contador = 6

//   // boton.addEventListener('click', fn)

//   return (
//     <div>
//       <button onClick={() => {
//         contador = contador + 1
//         console.log(contador)
//       }}>{contador}</button>
//     </div>
//   )
// }

export default Contador