import { useEffect, useState, useRef } from "react";
import api from "../../services/api";

import './style.css'

import logo from './images/image.png';




function Login() {
  const [clients, setClient] = useState([]);

  const inputName = useRef();
  const inputEmail = useRef();
  const inputDate = useRef();
  const inputPhone = useRef();
  const inputCpf = useRef();
  const inputPassword = useRef();
  const inputUserRole = useRef();


  async function Login() {
    await api.post("/auth/login", {
      name: inputName.current.value,
      email: inputEmail.current.value,
      password: inputPassword.current.value,
      userRole: inputUserRole.current.value
    });
  }
  async function getClient(id) {
    try {
      const response = await api.get(`v1/clients/${id}/find`)
      setClient(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  }

  async function clientLogin() {
    await api.post("/auth/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        userRole: inputUserRole.current.value
        
    });
    getClient("691bb51975fde95e4d21736c");
  }

  //  useEffect(() => {
  //   getClient();
  // }, []);
  return (


    <div className="backgroud">
      <section className="logo-area">
      <div className="v1_4">
        <p className="welcome"><b>BEM VINDO!</b></p>
        <img className ="logo-image" src= {logo} alt = "Logo"></img>
        <p className="barber-tittle">BARBER<br/> SHOP</p>
        <p className=" since">since 2015</p>
        <button type= "button"className="signup-button">CADASTRO</button>
      </div>
      </section>
      <section className="login-area">
      <div className="v1_29">
      <p className="login"><b>LOGIN</b></p>
        <div className="v1_45"><input className="v1_48" placeholder="Email" name="email" type="text" ref={inputEmail} /></div>
        <div className="v1_46"><input className="v1_49" placeholder="Senha" name="password" type="text" ref={inputPassword} /></div>
        <input placeholder="Role" name="userRole" type="text" ref={inputUserRole} />
        <button type="button" onClick={clientLogin}>Cadastrar</button>
      </div>
      </section>
    </div>




     /* <form>
        <h1>Login</h1>
        <input placeholder="Email" name="email" type="text" ref={inputEmail} />
        <input placeholder="Senha" name="password" type="text" ref={inputPassword} />
        <input placeholder="Role" name="userRole" type="text" ref={inputUserRole} />
        <button type="button" onClick={clientLogin}>Cadastrar</button>
      </form>
      {clients.map((client) => (
        <div key={client.id} className="card">
          <div>
            <p>Nome: <span>{client.name}</span></p>
            <p>Email: <span>{client.email}</span></p>
            <p>CPF: <span>{client.cpf}</span></p>
            <p>Data: <span>{client.date}</span></p>
            <p>Phone: <span>{client.phone}</span></p>
            <p>User role: <span>{client.userRole}</span></p>
          </div>
        </div>
      ))} */
  );

}
export default Login;