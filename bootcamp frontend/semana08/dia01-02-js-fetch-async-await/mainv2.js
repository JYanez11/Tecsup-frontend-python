const url = "https://jsonplaceholder.typicode.com/users"



// caso : manejo de errores, con return


// paso 1 : fetch
const fetchUsersConManejoDeErrores = async () => {
  try {
   
    const response = await fetch(url)

    console.log(response.status)

    if (response.status !== 200) {
      console.log('Tuvimos problemas para cargar el recurso users')
      // return
      throw new Error('ERROR HTTP:' + response.status)
    }

    const data = await response.json() // STATUS CODE -> 200 OK

    return data
  } catch(error) {
    console.log(error)
  }
}

// paso 2 : renderizo
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

// paso 3: ejecuto
fetchUsersConManejoDeErrores()
  .then(users => renderUsers(users))

// TODO: Resolver estos ejercicios
// Mostrar un mensaje de cargando
// Mostrar solo usuarios de una ciudad, la ciudad es a su elección
// Mostrar cuántos usuarios hay