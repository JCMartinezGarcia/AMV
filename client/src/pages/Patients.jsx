import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import PatientsCard from "../components/PatientsCard";
import PatientsTable from "../components/PatientsTable";
import axios from "axios";
import SearchPatients from "../components/SearchPatients";
import RegisterPatientButton from "../components/RegisterPatientButton";
const Patients = () => {

    const [totalPatients, setTotalPatients] = useState(0);
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        getPatientsCount();
        getPatients();
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

    const getPatients = async () => {
        try {
            const response = await axios('patients/list');
            if (response.data.patients.length) {
                setPatients(response.data.patients);
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
            <PatientsCard totalOfPatients={totalPatients} />
            <br />
            <br />
            <div className="flex flex-row justify-around">
                <SearchPatients />
                <RegisterPatientButton />
            </div>
            <PatientsTable patients={patients} reload={getPatients} />
        </div>
    );
}

export default Patients;