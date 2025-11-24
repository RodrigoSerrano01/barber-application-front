// import { useEffect, useState, useRef } from "react";
// import api from "../../services/api";

// import './style.css'

// function App() {
//   const [clients, setClient] = useState([]);
//   const [employees, setEmployees] = useState([]);
//   const inputName = useRef();
//   const inputAge = useRef();
//   const inputEmail = useRef();

//   async function getClients() {
//     try {
//       const response = await api.get("/clients")
//       setClient(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching clients:", error);
//     }
//   }

//   async function getEmployees() {
//     try {
//       const response = await api.get("/employee")
//       setEmployees(response.data);
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching employees:", error);
//     }
//   }

//   useEffect(() => {
//     getClients();
//     getEmployees();
//   }, []);

//   return (
//     <div class="container" >
//       <div class="div-client">
//         <h1>Clients</h1>
//         {clients.map((client) => (
//           <div key={client.id} className="card">
//             <div>
//               <p>Nome: <span>{client.name}</span></p>
//               <p>Email: <span>{client.email}</span></p>
//               <p>CPF: <span>{client.cpf}</span></p>
//               <p>Data: <span>{client.date}</span></p>
//               <p>Phone: <span>{client.phone}</span></p>
//               <p>User role: <span>{client.userRole}</span></p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div class="div-employee">
//         <h1>Employees</h1>
//         {employees.map((employee) => (
//           <div key={employee.id} className="card">
//             <div>
//               <p>Nome: <span>{employee.name}</span></p>
//               <p>Email: <span>{employee.email}</span></p>
//               <p>CPF: <span>{employee.cpf}</span></p>
//               <p>Data: <span>{employee.date}</span></p>
//               <p>Phone: <span>{employee.phone}</span></p>
//               <p>User role: <span>{employee.userRole}</span></p>
//               <div className="div-slots">
//                 {employee.workSchedules?.map((schedule) => (
//                   <div key={schedule.id}>
//                     <p>{schedule.weekDay}</p>
//                     <div className="slots">
//                       {schedule.slots?.map((slot) => (
//                         <div key={slot.id} className="slot-card">
//                           <p>{slot.time}</p>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>


//   );
// }

// export default App;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./style.css";

// function Home() {
//   const navigate = useNavigate();
//   const [client, setClient] = useState([]);
//    const [loading, setLoading] = useState(true);
//   const token = localStorage.getItem("token");
//     const id = localStorage.getItem("id");
  

//   useEffect(() => {
    

//     if (!token || !id) {
//       navigate("/"); // não logado → volta ao login
//       return;
//     }

//     // adiciona token ao header
//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     async function getClient() {
//       try {
//         const response = await api.get(`/v1/clients/${id}/find`);
        
//         setClient(response.data);
//         console.log(client.name);
//       } catch (error) {
//         console.error("Erro ao carregar cliente:", error);
//       }
//     }

//     getClient();
//   }, []);

//   if (!client) {
//     return <p>Carregando...</p>;
//   }

//   return (
//     <div className="home-container">
//       <h1>Bem-vindo, {client.name}!</h1>

//       <div className="client-info">
//         <p><b>Email:</b> {client.email}</p>
//         <p><b>Telefone:</b> {client.phone}</p>
//         <p><b>CPF:</b> {client.cpf}</p>
//         <p><b>Nascimento:</b> {client.date}</p>
//         <p><b>Tipo de usuário:</b> {client.userRole}</p>
//       </div>

//       <button
//         className="logout-btn"
//         onClick={() => {
//           localStorage.removeItem("token");
//           localStorage.removeItem("Id");
//           navigate("/");
//         }}
//       >
//         Sair
//       </button>
//     </div>
//   );
// }

// export default Home;



// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./style.css";

// function Home() {
//   const navigate = useNavigate();
//   const [client, setClient] = useState(null);
//   const token = localStorage.getItem("token");
//   const id = localStorage.getItem("id");

//   useEffect(() => {
//     if (!token || !id) {
//       navigate("/"); // não logado → volta ao login
//       return;
//     }
//     console.log(client)

//     api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//     async function getClient() {
//       try {
//         const response = await api.get(`/v1/clients/${id}/find`);
//         setClient(response.data);
//         console.log(response.data); // aqui mostra corretamente
//       } catch (error) {
//         console.error("Erro ao carregar cliente:", error);
//       }
//     }

//     getClient();
//   }, [token, id, navigate]);

//   if (!client) {
//     return <p>Carregando...</p>;
//   }

//   return (
//     <div className="home-container">
//       <h1>Bem-vindo, {client?.name}!</h1>

//       <div className="client-info">
//         <p><b>Email:</b> {client?.email}</p>
//         <p><b>Telefone:</b> {client?.phone}</p>
//         <p><b>CPF:</b> {client?.cpf}</p>
//         <p><b>Nascimento:</b> {client?.date}</p>
//         <p><b>Tipo de usuário:</b> {client?.userRole}</p>
//       </div>

//       <button
//         className="logout-btn"
//         onClick={() => {
//           localStorage.removeItem("token");
//           localStorage.removeItem("id");
//           navigate("/");
//         }}
//       >
//         Sair
//       </button>
//     </div>
//   );
// }

// export default Home;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

function Home() {
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id"); // verifique se está salvando "id" no login

  useEffect(() => {
    if (!token || !id) {
      navigate("/"); // usuário não logado → volta para Login
      return;
    }

    // Adiciona token ao header
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    async function getClient() {
      try {
        const response = await api.get(`/v1/clients/${id}/find`);
        console.log("Dados do cliente recebidos:", response.data);
        setClient(response.data);
      } catch (error) {
        console.error("Erro ao carregar cliente:", error);
      } finally {
        setLoading(false);
      }
    }

    getClient();
  }, [token, id, navigate]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!client) {
    return <p>Não foi possível carregar os dados do cliente.</p>;
  }

  return (
    <div className="home-container">
      {/* Cabeçalho */}
      <h1>Bem-vindo, {client.name}!</h1>

      {/* Informações do cliente */}
      <div className="client-info">
        <p><b>Email:</b> {client.email}</p>
        <p><b>Telefone:</b> {client.phone}</p>
        <p><b>CPF:</b> {client.cpf}</p>
        <p><b>Nascimento:</b> {client.date}</p>
        <p><b>Tipo de usuário:</b> {client.userRole}</p>
      </div>

      {/* Botão de logout */}
      <button
        className="logout-btn"
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("id"); // importante: remover exatamente a mesma chave
          navigate("/");
        }}
      >
        Sair
      </button>
    </div>
  );
}

export default Home;