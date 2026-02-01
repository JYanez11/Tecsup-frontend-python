import { useState } from "react"

const ProductList = () => {
  const [products, setProducts] = useState([])

  // TODO: Leer los productos y listarlos desde el servicio de dummyjson (https://dummyjson.com/products).

  return (
    <div>
      <h2>Product list</h2>

      <ul>
        {products.map(product => {
          return (
            <li key={product.id}>
              <h4>{product.id} - {product.title}</h4>
              <p>{product.description}</p>
              <img src={product.thumbnail} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ProductList