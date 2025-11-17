import { useEffect, useState, useRef } from "react";
import api from "../../services/api";

import './style.css'

function App() {
  const [clients, setClient] = useState([]);
  const [employees, setEmployees] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  async function getClients() {
    try {
      const response = await api.get("/clients")
      setClient(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching clients:", error);
    }
  }

  async function getEmployees() {
    try {
      const response = await api.get("/employee")
      setEmployees(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  }

  useEffect(() => {
    getClients();
    getEmployees();
  }, []);

  return (
    <div class="container" >
      <div class="div-client">
        <h1>Clients</h1>
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
      <div class="div-employee">
        <h1>Employees</h1>
        {employees.map((employee) => (
          <div key={employee.id} className="card">
            <div>
              <p>Nome: <span>{employee.name}</span></p>
              <p>Email: <span>{employee.email}</span></p>
              <p>CPF: <span>{employee.cpf}</span></p>
              <p>Data: <span>{employee.date}</span></p>
              <p>Phone: <span>{employee.phone}</span></p>
              <p>User role: <span>{employee.userRole}</span></p>
              <div className="div-slots">
                {employee.workSchedules?.map((schedule) => (
                  <div key={schedule.id}>
                    <p>{schedule.weekDay}</p>
                    <div className="slots">
                      {schedule.slots?.map((slot) => (
                        <div key={slot.id} className="slot-card">
                          <p>{slot.time}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>


  );
}

export default App;