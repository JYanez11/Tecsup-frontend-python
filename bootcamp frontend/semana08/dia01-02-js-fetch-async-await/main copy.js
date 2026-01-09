const url = "https://jsonplaceholder.typicode.com/users"


// caso 1 : fetchUsersSinRetorno (Básico)
// Imprime los datos directamente en la consola. Al ser async, 
// siempre devuelve una promesa, por eso al hacerle un console.log() 
// fuera de la función, verás Promise {<pending>}.

// fetch(url)
//   .then(respuesta => respuesta.json())
//   .then(data => {
//     console.log(data)
//     renderTodos(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })


// caso 2 fetchUsersSinRetorno (Sin retorno)
// Aquí se usa return await response.json(). Esto permite que
//  quien llame a la función reciba los datos (después de que 
// la promesa se resuelva).


  const fetchUsersSinRetorno = async () => {
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)
}

// fetchUsersSinRetorno()

// console.log(fetchUsersSinRetorno()) // Promise {<pending>}


// caso 2.1 fetchUsersConManejoDeErrores (La más completa)


const fetchUsersConnRetorno = async () => {  // Retorna una promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

fetchUsersConnRetorno() // Retorna una promesa
  .then(users => console.log(users))


const fetchUsersConManejoDeErrores = async () => {
  try {
    document.querySelector('#estado').textContent = 'Cargando...'

    const response = await fetch(url)

    console.log(response.status)

    if (response.status !== 200) {
      console.log('Tuvimos problemas para cargar el recurso users')
      // return
      throw new Error('ERROR HTTP:' + response.status)
    }

    const data = await response.json() // STATUS CODE -> 200 OK

    document.querySelector('#estado').textContent = ''

    return data
  } catch(error) {
    console.log(error)
  }
}

const renderUsers = async (users = []) => {
  const divApp = document.querySelector('#app')

  let userList = ''

  users.forEach(user => {
    userList += `
      <div>
        <h2>${user.id} - ${user.name} (${user.email})</h2>
        <p>${user.company.name}</p>
      </div>
    `
  })

  divApp.innerHTML = userList
}

fetchUsersConManejoDeErrores()
  .then(users => {
    const filteredUsers = users.filter(
      user => user.address.city === "Gwenborough"
    )

    document.querySelector('#total').textContent = `Hay ${users.length} usuarios.`

    renderUsers(filteredUsers)
  })

// TODO: Resolver estos ejercicios
// Mostrar un mensaje de cargando
// Mostrar solo usuarios de una ciudad, la ciudad es a su elección
// Mostrar cuántos usuarios hay

