import { useEffect, useState, useRef } from "react";
import api from "../../services/api";

import './style.css'

function App() {
  const [clients, setClient] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getClients() {
    try {
      const response = await api.get("/clients")
      setClient(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div>
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
      ))}
    </div>
  );
}

export default App;