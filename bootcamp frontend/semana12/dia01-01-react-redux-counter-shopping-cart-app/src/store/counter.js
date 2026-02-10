// Slice: Parte del estado global
// Reducers: Funciones que cambian el estado
// Actions: Acciones que disparan cambios
// Payload: es la data que pasamos como parámetro al llamar a una acción desde el componente

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'Counter',
  initialState: 67,
  reducers: {
    // Sin parámetros (sin payload)
    increment: (state) => { // <- Actions
      // state = state + 1
      return state += 1
    },
    decrement: (state) => state -= 1,
    incrementBy: (state, action) => state + action.payload
  } 
})

// Exportamos las acciones
export const { increment, decrement, incrementBy } = counterSlice.actions

// Exportando el estado inicial y a los reducers del slide
export default counterSlice.reducer