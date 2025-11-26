import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

function HomeEmployee() {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("id");

  useEffect(() => {
    if (!token || !id) {
      navigate("/");
      return;
    }

    async function getEmployeeAndServices() {
      try {
        const employeeResponse = await api.get(`/v1/employee/${id}/find`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setEmployee(employeeResponse.data);

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

  // Toggle disponibilidade de um slot
  const toggleSlot = (dayIndex, slotIndex) => {
    const updatedEmployee = { ...employee };
    const slot = updatedEmployee.workSchedules[dayIndex].slots[slotIndex];
    slot.available = !slot.available;
    setEmployee(updatedEmployee);
  };

  // Salvar alterações no backend
  const saveSchedule = async () => {
    setSaving(true);
    try {
      await api.put(
        `/v1/employee/${id}/work-schedules`,
        { workSchedules: employee.workSchedules },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Horários atualizados com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar horários:", error);
      alert("Erro ao salvar horários.");
    } finally {
      setSaving(false);
    }
  };

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
        <div className="client-info">
          <h2 className="login">Informações do Funcionário {employee.name}</h2>
          <p><b>Email:</b> {employee.email}</p>
          <p><b>Telefone:</b> {employee.phone}</p>
          <p><b>CPF:</b> {employee.cpf}</p>
          <p><b>Nascimento:</b> {employee.date}</p>
          <p><b>Tipo de usuário:</b> {employee.userRole}</p>
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

        <div className="schedule-list">
          {employee.workSchedules && employee.workSchedules.length > 0 ? (
            employee.workSchedules.map((schedule, dayIndex) => (
              <div key={dayIndex} className="schedule-card">
                <div className={`schedule-day ${!schedule.working ? 'not-working' : ''}`}>
                  {schedule.weekDay} {schedule.working ? "" : "(Não trabalha)"}
                </div>
                <div className="slots-container">
                  {schedule.slots && schedule.slots.length > 0 ? (
                    schedule.slots.map((slot, slotIndex) => (
                      <div
                        key={slotIndex}
                        className={`slot ${slot.available ? "available" : "unavailable"}`}
                        onClick={() => toggleSlot(dayIndex, slotIndex)}
                      >
                        {slot.time}
                      </div>
                    ))
                  ) : (
                    <p>Nenhum horário disponível</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p>Não há horários cadastrados.</p>
          )}
          <button
            className="form-login-button"
            onClick={saveSchedule}
            disabled={saving}
          >
            {saving ? "Salvando..." : "Salvar Alterações"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeEmployee;