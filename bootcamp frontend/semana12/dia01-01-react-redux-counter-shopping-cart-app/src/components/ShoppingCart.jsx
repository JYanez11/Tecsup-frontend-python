import { useSelector } from "react-redux"

// TODO: Renderizar los productos añadidos al carrito de compras según la maquetación de abajo

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <section className="w-56 p-2">
      <h3 className="text-2xl mb-2 text-center">ShoppingCart</h3>

      <div className="mb-2">
        <button
          className="bg-red-400 p-2 min-w-36 rounded-lg cursor-pointer text-white font-bold hover:bg-red-500 duration-300 w-full"
        >
          Limpiar carrito
        </button>
      </div>

      <ul className="flex flex-col gap-4">
        <li
          className="flex flex-col gap-2 font-bold bg-slate-200 p-2 rounded-lg shadow"
        >
          <span>title</span>
          <span>S/ 0.00 (Qty: 1)</span>
          <button
            className="bg-red-400 p-2 rounded-lg cursor-pointer text-white font-bold hover:bg-red-500 duration-300"
          >
            ❌
          </button>
        </li>
      </ul>

      <div className="mt-4 pt-4 font-bold bg-amber-100 px-4 py-2 flex justify-between rounded-lg">
        <strong>TOTAL:</strong> <span>S/ 0.00</span>
      </div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>

    </section>
  )
}

export default ShoppingCart