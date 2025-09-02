import { useEffect, useState, useCallback } from "react";
import NavigationBar from "../components/NavigationBar";
import PatientsCard from "../components/PatientsCard";
import RegisterPatientForm from "../components/RegisterPatientForm";
import Footer from "../components/Footer";
import axios from "axios";

const PatientsRegister = () => {
  const [totalPatients, setTotalPatients] = useState(0);

  // ✅ centralized error logging
  const handleError = (message, error) => {
    console.error(`${message}:`, error.message || error);
  };

  // ✅ useCallback to avoid redefining function on re-renders
  const getPatientsCount = useCallback(async () => {
    try {
      const { data } = await axios.get("patients/count");
      if (data.length) {
        const { total } = data[0];
        setTotalPatients(total);
      } else {
        setTotalPatients(0);
      }
    } catch (error) {
      handleError("Error fetching patients count", error);
    }
  }, []);

  useEffect(() => {
    getPatientsCount();
  }, [getPatientsCount]);

  return (
    <div className="bg-sky-500/25 min-h-screen flex flex-col">
      <NavigationBar />

      <main className="flex-grow">
        <section className="py-6">
          <div className="flex justify-center">
            <PatientsCard
              total={totalPatients}
              text="Pacientes Registrados"
              imgUrl="../src/assets/user-avatar.svg"
            />
          </div>
        </section>

        <section className="flex justify-center py-6">
          <RegisterPatientForm reloadPatientsCount={getPatientsCount} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PatientsRegister;
