import { useEffect, useState, useCallback } from "react";
import axios from "axios";

import NavigationBar from "../components/NavigationBar";
import PatientsCard from "../components/PatientsCard";
import Footer from "../components/Footer";
import Analitics from "../components/Analitics";

const Home = () => {
    const [totalPatients, setTotalPatients] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleError = (message, error) => {
        console.error(`${message}`, error?.message || error);
    };

    const fetchPatientsCount = useCallback(async () => {
        try {
            setLoading(true);
            const { data } = await axios.get("/patients/count");
            if (data?.length) {
                setTotalPatients(data[0].total);
            }
        } catch (error) {
            handleError("Error fetching patients count:", error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPatientsCount();
    }, [fetchPatientsCount]);

    return (
        <div className="bg-sky-500/25 min-h-screen flex flex-col">
            <NavigationBar />

            {/* Cards Section */}
            <section className="flex justify-center gap-6 mt-6">
                <PatientsCard
                    total={0}
                    text="Médicos Registrados"
                    imgUrl="src/assets/doctor-avatar.svg"
                />
                <PatientsCard
                    total={loading ? "..." : totalPatients}
                    text="Pacientes Registrados"
                    imgUrl="src/assets/user-avatar.svg"
                />
                <PatientsCard
                    total={0}
                    text="Citas Registradas"
                    imgUrl="src/assets/notebook.svg"
                />
            </section>

            {/* Title */}
            <div className="flex justify-center m-8">
                <h1 className="text-4xl font-extrabold tracking-widest text-center">
                    Asistente Médico Virtual
                </h1>
            </div>

            {/* About Section */}
            <section className="m-14 text-justify space-y-6">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                    faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                    hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
                    per conubia nostra inceptos himenaeos.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                    faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                    hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
                    per conubia nostra inceptos himenaeos.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
                    faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam urna
                    tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.
                    Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut
                    hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent
                    per conubia nostra inceptos himenaeos.
                </p>
            </section>

            {/* Analytics Section */}
            <section className="flex flex-col items-center m-8">
                <h2 className="text-4xl font-extrabold tracking-widest mb-6">
                    Analíticas
                </h2>
                <div className="w-full max-w-5xl">
                    <Analitics />
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
