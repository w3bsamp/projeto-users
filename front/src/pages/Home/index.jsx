import { useEffect, useState, useRef } from 'react'
import Trash from '../../assets/trash.png'
import api from '../../../services/api'
import './style.css'

function Home() {
  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function getUsers() {
    const usersFromApi = await api.get('/users')

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className='container'>
        <form action="push">
          <h1>Cadastro de Usuarios</h1>
          <input type="text" placeholder='Nome' name='Nome' ref={inputName}/>
          <input type="text" placeholder='Idade' name='Idade' ref={inputAge}/>
          <input type="email" name="Email" placeholder='Email' ref={inputEmail}/>
          <button type='button' onClick={createUsers}>Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className='card'>
            <div>
              <p>Nome: <span>{user.name}</span></p>
              <p>Idade: <span>{user.age}</span></p>
              <p>Email: <span>{user.email}</span></p>
            </div>
            <button>
              <img src={Trash} width={'19px'} />
            </button>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
