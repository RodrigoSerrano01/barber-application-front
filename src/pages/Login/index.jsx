import { useEffect, useState, useRef } from "react";
import api from "../../services/api";

import './style.css'

import logo from './images/image.png';

function Login() {
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputUserRole = useRef();

  async function clientLogin() {
    try {
      await api.post("/auth/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        userRole: inputUserRole.current.value
      });
      console.log("Login realizado");
    } catch (error) {
      console.error("Erro no login:", error);
    }
  }

  return (
    <section className="login-area">
      {/* Lado esquerdo */}
      <div className="left">
        <p className="welcome"><b>BEM VINDO!</b></p>
        <img className="logo-image" src={logo} alt="Logo" />
        <p className="barber-tittle">BARBER<br />SHOP</p>
        <p className="since">since 2015</p>
        <button
          type="button"
          className="signup-button"
        >
          CADASTRO
        </button>
      </div>

      {/* Lado direito */}
      <div className="right">
        <p className="login"><b>LOGIN</b></p>
        <form
          className="form-login"
          onSubmit={e => {
            e.preventDefault();
            clientLogin();
          }}
        >
          <input
            placeholder="Email"
            name="email"
            type="text"
            ref={inputEmail}
          />
          <input
            placeholder="Senha"
            name="password"
            type="password"
            ref={inputPassword}
          />
          <select name="userRole" ref={inputUserRole}>
            <option value="ROLE_CLIENT">Cliente</option>
            <option value="ROLE_EMPLOYEE">Funcionário</option>
          </select>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
}

export default Login;