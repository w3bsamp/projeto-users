import { useState } from 'react'
import './style.css'
import Trash from '../../assets/lixo.svg'

function Home() {

  const users = [{
    id: '21312312312321',
    name: 'Rodoflo',
    age: 33,
    email: 'teste'
  },
  {
    id: '21312312312331',
    name: 'aline',
    age: 33,
    email: 'testeeeee'
  }]

  return (
    <div className='container'>
      <form action="">
        <h1>Cadastro de Usuários</h1>
        <input type="text" name='nome' placeholder='Nome' />
        <input type="number" name="idade" placeholder='Idade' />
        <input type="email" name="email" placeholder='Email' />
        <button type="button">Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className='card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Home
