import { createSlice } from "@reduxjs/toolkit"

export const CartSlice = createSlice({
  name: 'Cart',
  initialState: [
    // { id: 1, title: 'Product 1' },
    // { id: 2, title: 'Product 2' },
    // { id: 3, title: 'Product 3' },
  ],
  reducers: {
    addToCart: (state, action) => {
      // Aquí va la lógica para añadir un producto al carrito de compras
      // En action.payload está la información del producto(objeto)
      console.log('addToCart', action.payload)

      const newProduct = action.payload

      // Cuando el producto es nuevo en el carrito lo agregamos al estado directamente
      return [
        ...state,
        newProduct
      ]
    }
  }
})

// Exportar el estado inicial y los reducers del slice
export default CartSlice.reducer

export const { addToCart } = CartSlice.actions