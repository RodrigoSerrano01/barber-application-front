// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";

// import "./style.css";
// import logo from "./images/image.png";

// function Login() {
//   const navigate = useNavigate();
//   const inputEmail = useRef();
//   const inputPassword = useRef();
//   const inputUserRole = useRef();

//   async function clientLogin() {
//     try {
//       const response = await api.post("/auth/login", {
//         email: inputEmail.current.value,
//         password: inputPassword.current.value,
//         userRole: inputUserRole.current.value,
//       });

//       // SALVANDO TOKEN E ID DO USUÁRIO
//       localStorage.setItem("token", response.data.token);
//       localStorage.setItem("id", response.data.id);
      

      
//       console.log("response: id ", response.data.id);
//       console.log("response: token", response.data.token);
//       navigate("/home");

//     } catch (error) {
//       console.error("Erro no login:", error);
//     }
//   }

//   return (
//     <section className="login-area">
//       {/* Lado esquerdo */}
//       <div className="left">
//         <p className="welcome"><b>BEM VINDO!</b></p>

//         <img className="logo-image" src={logo} alt="Logo" />

//         <p className="barber-tittle">BARBER<br />SHOP</p>
//         <p className="since">since 2015</p>

//         <button
//           type="button"
//           className="signup-button"
//           onClick={() => navigate("/Register")}
//         >
//           CADASTRO
//         </button>
//       </div>

//       {/* Lado direito */}
//       <div className="right">
//         <p className="login"><b>LOGIN</b></p>

//         <form
//           className="form-login"
//           onSubmit={(e) => {

            
//             e.preventDefault();
//             clientLogin();
//           }}
//         >
//           <input
//             placeholder="Email"
//             name="email"
//             type="text"
//             ref={inputEmail}
//           />

//           <input
//             placeholder="Senha"
//             name="password"
//             type="password"
//             ref={inputPassword}
//           />

//           <select name="userRole" ref={inputUserRole}>
//             <option value="ROLE_CLIENT">Cliente</option>
//             <option value="ROLE_EMPLOYEE">Funcionário</option>
//           </select>

//           <button type="submit">Entrar</button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login;

import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

import "./style.css";
import logo from "./images/image.png";

function Login() {
  const navigate = useNavigate();
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputUserRole = useRef();

  async function clientLogin() {
    try {
      const response = await api.post("/auth/login", {
        email: inputEmail.current.value,
        password: inputPassword.current.value,
        userRole: inputUserRole.current.value,
      });

      const { token, id, userRole } = response.data;

      // SALVANDO TOKEN E ID DO USUÁRIO
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      localStorage.setItem("userRole", userRole);

      console.log("response: id ", id);
      console.log("response: token", token);
      console.log("response: role", userRole);

      // 🔥 REDIRECIONAMENTO POR ROLE
      if (userRole === "ROLE_CLIENT") {
        navigate("/home");
      } else if (userRole === "ROLE_EMPLOYEE") {
        navigate("/employee-home");
      } else {
        console.warn("Role desconhecida:", userRole);
        navigate("/home");
      }

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
          onClick={() => navigate("/Register")}
        >
          CADASTRO
        </button>
      </div>

      {/* Lado direito */}
      <div className="right">
        <p className="login"><b>LOGIN</b></p>

        <form
          className="form-login"
          onSubmit={(e) => {
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