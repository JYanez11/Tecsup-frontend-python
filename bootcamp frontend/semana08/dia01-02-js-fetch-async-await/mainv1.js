const url = "https://jsonplaceholder.typicode.com/users"

// caso : basico

// fetch(url)
//   .then(respuesta => respuesta.json())
//   .then(data => {
//     console.log(data)
//     renderTodos(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })

// caso : sin return

const fetchUsersSinRetorno = async () => {
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)
}

// fetchUsersSinRetorno()

// console.log(fetchUsersSinRetorno()) // Promise {<pending>}


// caso : con return, el .then separado

const fetchUsersConnRetorno = async () => {  // Retorna una promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

fetchUsersConnRetorno() // Retorna una promesa
  .then(users => console.log(users))


