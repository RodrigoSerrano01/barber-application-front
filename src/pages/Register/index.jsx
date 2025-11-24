// import { useEffect, useState, useRef } from "react";
// import api from "../../services/api";

// import './style.css'


// function App() {
    
//     const inputName = useRef();
//   const inputEmail = useRef();
//   const inputDate = useRef();
//   const inputPhone = useRef();
//   const inputCpf = useRef();
//   const inputPassword = useRef();
//   const inputUserRole = useRef();


//   async function createUsers() {
//     await api.post("/auth/register", {
//         name: inputName.current.value,
//         date: inputDate.current.value,
//         phone: inputPhone.current.value,
//         email: inputEmail.current.value,
//         password: inputPassword.current.value,
//         cpf: inputCpf.current.value,
//         userRole: inputUserRole.current.value
//     });

//   }
//   return (
//     <div className = "conteiner" >
//             <form>
//                 <h1>Cadastro de Usuario</h1>
//                 <input placeholder="Nome" name="nome" type="text" ref={inputName} />
//                 <input placeholder="Email" name="email" type="text" ref={inputEmail} />
//                <input placeholder="Data de nascimento" name="date" type="text" ref={inputDate} />
//                <input placeholder="Telefone" name="phone" type="text" ref={inputPhone} />
//                <input placeholder="CPF" name="cpf" type="text" ref={inputCpf} />
//                <input placeholder="Senha" name="password" type="text" ref={inputPassword} />
//                <input placeholder="Role" name="userRole" type="text" ref={inputUserRole} />
//                <button type="button"onClick={createUsers}>Cadastrar</button>
//             </form>
//     </div >
//     );

// }
// export default App;

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import "./style.css"; 
import logo from "../Login/images/image.png";

function App() {
  const navigate = useNavigate();

  const inputName = useRef();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputCpf = useRef();
  const inputPhone = useRef();
  const inputDate = useRef();
  const inputUserRole = useRef();
  

  async function registerUser(e) {
    e.preventDefault();
    try {
      await api.post("/auth/register", {
        name: inputName.current.value,
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        cpf: inputCpf.current.value,
        phone: inputPhone.current.value,
        date: inputDate.current.value,
        userRole: inputUserRole.current.value
      });

      console.log("Cadastro realizado!");
      navigate("/");
    } catch (error) {
      console.error("Erro no cadastro:", error);
    }
  }

  return (
    <section className="login-area">
      {/* LADO ESQUERDO */}
      <div className="left">
        <p className="welcome"><b>BEM VINDO!</b></p>
        <img className="logo-image" src={logo} alt="Logo" />
        <p className="barber-tittle">BARBER<br />SHOP</p>
        <p className="since">since 2015</p>

        <button
          type="button"
          className="signup-button"
          onClick={() => navigate("/")}
        >
          VOLTAR
        </button>
      </div>

      {/* LADO DIREITO */}
      <div className="right">
        <p className="login"><b>CADASTRO</b></p>

        <form className="form-login" onSubmit={registerUser}>
          <input ref={inputName} type="text" placeholder="Nome completo" />
          <input ref={inputEmail} type="text" placeholder="Email" />
          <input ref={inputPassword} type="password" placeholder="Senha" />

          <input ref={inputCpf} type="text" placeholder="CPF" />
          <input ref={inputPhone} type="text" placeholder="Telefone" />
          <input ref={inputDate} type="date" placeholder="Data de nascimento" />

          <select ref={inputUserRole}>
            <option value="ROLE_CLIENT">Cliente</option>
            <option value="ROLE_EMPLOYEE">Funcionário</option>
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </section>
  );
}

export default App;