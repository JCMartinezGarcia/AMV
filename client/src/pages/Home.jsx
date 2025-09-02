import { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import PatientsCard from "../components/PatientsCard";
import axios from "axios";
import Footer from "../components/Footer";
import Analitics from "../components/Analitics";
const Home = () => {

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
            <br />
            <div className="flex flex row justify-center">
                <PatientsCard total={0} text={'Medicos Registrados'} imgUrl={'src/assets/doctor-avatar.svg'} />
                <PatientsCard total={totalPatients} text={'Pacientes Registrados'} imgUrl={'src/assets/user-avatar.svg'} />
                <PatientsCard total={0} text={'Citas Registradas'} imgUrl={'src/assets/notebook.svg'} />
            </div>
            <br />
            <div className="flex justify-center m-4">
                <span className="text-4xl font-extrabold tracking-widest m-auto">Asistente Médico Virtual</span>
            </div>
            <section>
                <div className="text-wrap m-14">
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <br />
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                    <br />
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                </div>
            </section>
            <section>
                <div className="flex justify-center m-4">
                    <span className="text-4xl font-extrabold tracking-widest m-auto">Analiticas</span>
                </div>
                <div className="m-14">
                    <Analitics />
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;