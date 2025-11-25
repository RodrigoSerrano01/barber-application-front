import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

function HomeEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (!token || !id) {
      navigate("/"); // usuário não logado → volta para Login
      return;
    }

    async function getEmployeeAndServices() {
      try {
        console.log("Token:", token);
        console.log("ID:", id);

        // Requisição do funcionário com token no header
        const employeeResponse = await api.get(`/v1/employee/${id}/find`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setEmployee(employeeResponse.data);

        // Requisição de serviços
        const servicesResponse = await api.get("/v1/services");
        setServices(servicesResponse.data);

      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        if (error.response) {
          console.error("Status:", error.response.status);
          console.error("Data:", error.response.data);
        }
      } finally {
        setLoading(false);
      }
    }

    getEmployeeAndServices();
  }, [token, id, navigate]);

  if (loading) return <p>Carregando...</p>;
  if (!employee) return <p>Não foi possível carregar os dados do funcionário.</p>;

  return (
    <div className="login-area">
      <div className="left">
        <h2 className="welcome">Serviços Disponíveis</h2>
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <p><b>Preço:</b> {service.value} R$</p>
          </div>
        ))}
      </div>

      <div className="right">
        <h2 className="login">Informações do Funcionário {employee.name}</h2>
        <div className="client-info">
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Telefone:</b> {employee.phone}</p>
          <p><b>CPF:</b> {employee.cpf}</p>
          <p><b>Nascimento:</b> {employee.date}</p>
          <p><b>Tipo de usuário:</b> {employee.userRole}</p>
        </div>
        <button
          className="form-login-button"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("id");
            localStorage.removeItem("userRole");
            navigate("/");
          }}
        >
          Sair
        </button>
      </div>
    </div>
  );
}

export default HomeEmployee;