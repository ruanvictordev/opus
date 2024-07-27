import React from 'react'

export default function Register() {
    const registerCandidate = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    }

    return (
    <div>
        <form onSubmit={registerCandidate}>
            <label>Nome Completo</label>
            <input type="text" id='name' placeholder='Nome completo...'/>
            <label>Email</label>
            <input type="text" id='email' placeholder='Email...'/><br></br>
            <label>Telefone</label>
            <input type="text" id='phone' placeholder='Telefone...'/>
            <label>Endereço</label>
            <input type="text" id='address' placeholder='Endereço...'/>
            <label>Idade</label>
            <input type="text" id='age' placeholder='Idade...'/><br></br>
            <label>Sobre</label>
            <textarea name="about" id="about" placeholder='Sobre...'></textarea>
            <label>Experiência</label>
            <input type="text" id='experience' placeholder='Experiência...'/><br></br>
            <label>Formação</label>
            <input type="text" id='formation' placeholder='Formação...'/>
            <label>Curriculo</label>
            <input type="text" id='curriculum' placeholder='Curriculo...'/><br></br>
            <label>Senha</label>
            <input type="text" id='password' placeholder='Senha...'/>
            <label>Confirmar Senha</label>
            <input type="text" id='confirmPassword' placeholder='Confirmar senha...'/><br></br>
            <button type='submit'>Cadastrar</button>
        </form>
    </div>
  )
}