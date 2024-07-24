import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const loginUser = async (e: { preventDefault: () => void; }) =>{
    e.preventDefault();
    const {email, password} = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password
      });
      if(data.error){
        toast.error(data.error)
      } else{
        setData({email: '', password: ''})
        toast.success('Login com sucesso. Bem Vindo!')
        navigate('/candidate')
      }
    } catch (error) {
      
    }
  }
  
  return (
    <div>
        <form onSubmit={loginUser}>
            <label>Email</label>
            <input type="text" id='email' placeholder='Email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value} )}/><br />
            <label>Senha</label>
            <input type="text" id='password' placeholder='Senha...' value={data.password} onChange={(e) => setData({...data, password: e.target.value} )}/><br />
            <button type='submit'>Logar</button>
        </form>
    </div>
  )
}
