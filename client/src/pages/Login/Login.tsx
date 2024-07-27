import React from 'react'

export default function Login() {
  const loginUser = (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
  }
  
  return (
    <div>
        <form onSubmit={loginUser}>
            <label>Email</label>
            <input type="text" id='email' placeholder='Email...'/><br />
            <label>Senha</label>
            <input type="text" id='password' placeholder='Senha...'/><br />
            <button type='submit'>Logar</button>
        </form>
    </div>
  )
}

