import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import PatientsCard from "../components/PatientsCard";
import RegisterPatientForm from "../components/RegisterPatientForm";
import axios from "axios";
import Footer from "../components/Footer";

const PatientsRegister = () => {

    const [totalPatients, setTotalPatients] = useState(0);

    useEffect(() => {
        getPatientsCount();
    }, []);

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const getPatientsCount = async () => {
        try {
            const response = await axios.get('patients/count');
            if (response.data.length) {
                const { total } = response.data[0];
                setTotalPatients(total);
            }
        } catch (error) {
            handleError('Server Error:', error);
        }
    }

    return (
        <div className="bg-sky-500/25">
            <NavigationBar />
            {/* <span className="text-xl font-extrabold tracking-widest">Asistente Médico Virtual</span> */}
            <br />
            <div className="flex flex-row justify-center">
                <PatientsCard total={totalPatients} text={'Pacientes Registrados'} imgUrl={'../src/assets/user-avatar.svg'} />
            </div>
            <br />
            <br />
            <RegisterPatientForm />
            <Footer />
        </div>
    );
}

export default PatientsRegister;