import React, { useState } from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function RegisterCandidate() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        age: '',
        about: '',
        experience: '',
        formation: '',
        curriculum: '',
        password: '',
        confirmPasword: ''
    })
    
    const registerCandidate = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const {name, email, phone, address, age, about, experience, formation, curriculum, password} = data
        try {
            const {data} = await axios.post('/register', {name, email, phone, address, age, about, experience, formation, curriculum, password});
            if(data.error){
                toast.error(data.error);
            } else{
                setData({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    age: '',
                    about: '',
                    experience: '',
                    formation: '',
                    curriculum: '',
                    password: '',
                    confirmPasword: ''
                });
                toast.success('Register Successfuly.');
                navigate('/login')
            }
        } catch (error) {   
            console.log(error);
        }
    }

    return (
    <div>
        <form onSubmit={registerCandidate}>
            <label>Nome Completo</label>
            <input type="text" id='name' placeholder='Nome completo...' value={data.name} onChange={(e) => setData({...data, name: e.target.value} )}/>
            <label>Email</label>
            <input type="text" id='email' placeholder='Email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value} )}/><br></br>
            <label>Telefone</label>
            <input type="text" id='phone' placeholder='Telefone...' value={data.phone} onChange={(e) => setData({...data, phone: e.target.value} )}/>
            <label>Endereço</label>
            <input type="text" id='address' placeholder='Endereço...' value={data.address} onChange={(e) => setData({...data, address: e.target.value} )}/>
            <label>Idade</label>
            <input type="text" id='age' placeholder='Idade...' value={data.age} onChange={(e) => setData({...data, age: e.target.value} )}/><br></br>
            <label>Sobre</label>
            <textarea name="about" id="about" placeholder='Sobre...' value={data.about} onChange={(e) => setData({...data, about: e.target.value} )}></textarea>
            <label>Experiência</label>
            <input type="text" id='experience' placeholder='Experiência...' value={data.experience} onChange={(e) => setData({...data, experience: e.target.value} )}/><br></br>
            <label>Formação</label>
            <input type="text" id='formation' placeholder='Formação...' value={data.formation} onChange={(e) => setData({...data, formation: e.target.value} )}/>
            <label>Curriculo</label>
            <input type="text" id='curriculum' placeholder='Curriculo...' value={data.curriculum} onChange={(e) => setData({...data, curriculum: e.target.value} )}/><br></br>
            <label>Senha</label>
            <input type="text" id='password' placeholder='Senha...' value={data.password} onChange={(e) => setData({...data, password: e.target.value} )}/>
            <label>Confirmar Senha</label>
            <input type="text" id='confirmPassword' placeholder='Confirmar senha...' value={data.confirmPasword} onChange={(e) => setData({...data, confirmPasword: e.target.value} )}/><br></br>
            <button type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}
