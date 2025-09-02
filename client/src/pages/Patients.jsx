import { useEffect, useState, useCallback } from "react";
import NavigationBar from "../components/NavigationBar";
import PatientsCard from "../components/PatientsCard";
import PatientsTable from "../components/PatientsTable";
import SearchPatients from "../components/SearchPatients";
import RegisterPatientButton from "../components/RegisterPatientButton";
import Footer from "../components/Footer";
import axios from "axios";

const Patients = () => {
    const [totalPatients, setTotalPatients] = useState(0);
    const [patients, setPatients] = useState([]);

    // ✅ centralize error logging
    const handleError = (message, error) => {
        console.error(`${message}:`, error.message || error);
    };

    // ✅ use useCallback to avoid re-creating functions unnecessarily
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

    const getPatients = useCallback(async () => {
        try {
            const { data } = await axios.get("patients/list");
            setPatients(data.patients || []);
        } catch (error) {
            handleError("Error fetching patients list", error);
        }
    }, []);

    // ✅ run once on mount
    useEffect(() => {
        getPatientsCount();
        getPatients();
    }, [getPatientsCount, getPatients]);

    return (
        <div className="bg-sky-500/25 min-h-screen flex flex-col">
            <NavigationBar />

            <main className="flex-grow">
                <section className="py-6">
                    <div className="flex justify-center">
                        <PatientsCard
                            total={totalPatients}
                            text="Pacientes Registrados"
                            imgUrl="src/assets/user-avatar.svg"
                        />
                    </div>
                </section>

                <section className="flex justify-between items-center m-6">
                    <SearchPatients foundPatients={setPatients} reloadTable={getPatients} />
                    <RegisterPatientButton />
                </section>

                <section className="px-6">
                    <PatientsTable patients={patients} reload={getPatients} />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Patients;
