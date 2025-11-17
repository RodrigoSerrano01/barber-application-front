import { useEffect, useState, useRef } from "react";
import api from "../../services/api";

import './style.css'


function App() {
    
    const inputName = useRef();
  const inputEmail = useRef();
  const inputDate = useRef();
  const inputPhone = useRef();
  const inputCpf = useRef();
  const inputPassword = useRef();
  const inputUserRole = useRef();


  async function createUsers() {
    await api.post("/auth/register", {
        name: inputName.current.value,
        date: inputDate.current.value,
        phone: inputPhone.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        cpf: inputCpf.current.value,
        userRole: inputUserRole.current.value
    });

  }
  return (
    <div className = "conteiner" >
            <form>
                <h1>Cadastro de Usuario</h1>
                <input placeholder="Nome" name="nome" type="text" ref={inputName} />
                <input placeholder="Email" name="email" type="text" ref={inputEmail} />
               <input placeholder="Data de nascimento" name="date" type="text" ref={inputDate} />
               <input placeholder="Telefone" name="phone" type="text" ref={inputPhone} />
               <input placeholder="CPF" name="cpf" type="text" ref={inputCpf} />
               <input placeholder="Senha" name="password" type="text" ref={inputPassword} />
               <input placeholder="Role" name="userRole" type="text" ref={inputUserRole} />
               <button type="button"onClick={createUsers}>Cadastrar`</button>
            </form>
    </div >
    );

}
export default App;