const url = "https://jsonplaceholder.typicode.com/users"




const fetchUsersConManejoDeErrores = async () => {
  try {
    document.querySelector('#estado').textContent = 'Cargando...'
    // muestra mensaje mientras carga

    const response = await fetch(url)

    console.log(response.status)

    if (response.status !== 200) {
      console.log('Tuvimos problemas para cargar el recurso users')
      // return
      throw new Error('ERROR HTTP:' + response.status)
    }

    const data = await response.json() // STATUS CODE -> 200 OK

    document.querySelector('#estado').textContent = ''
    // cuando termina de cargar , lo muestra en blanco

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