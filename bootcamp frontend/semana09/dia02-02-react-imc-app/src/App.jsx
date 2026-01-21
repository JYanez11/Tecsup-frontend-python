import { useState } from "react"

const App = () => {
  const [peso, setPeso] = useState(80)
  const [altura, setAltura] = useState(180)

  const handlePeso = (event) => {
    setPeso(Number(event.target.value))
  }

  const handleAltura = (event) => {
    setAltura(Number(event.target.value))
  }

  const imc = peso / ((altura / 100) ** 2)
  const imcDecimal = imc.toFixed(2)

  const imcResultado = () => {
    if (imc < 18.5) return "Bajo peso"
    if (imc >= 18.5 && imc <= 24.9) return "Peso normal"
    if (imc >= 25 && imc <= 29.9) return "Sobrepeso"
    if (imc >= 30 && imc <= 34.9) return "Obesidad tipo 1"
    if (imc >= 35 && imc <= 39.9) return "Obesidad tipo 2"
    return "Obesidad tipo 3"
  }

  return (
    <section className="w-[400px] bg-slate-200 p-4 mt-8 mx-auto rounded-md">
      <h1 className="text-3xl text-sky-600 text-center font-bold">
        IMC APP
      </h1>

      <div className="pt-4">
        <p>Peso: {peso} kg</p>
        <input
          type="range"
          min="50"
          max="200"
          value={peso}
          onChange={handlePeso}
        />
      </div>

      <div>
        <p>Altura: {altura} cm</p>
        <input
          type="range"
          min="100"
          max="220"
          value={altura}
          onChange={handleAltura}
        />
      </div>

      <p className="font-bold">Tu IMC es {imcDecimal}</p>

      <p className="font-bold text-2xl">
        Estado de IMC: {imcResultado()}
      </p>
    </section>
  )
}

export default App
