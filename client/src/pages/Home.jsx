import NavigationBar from "../components/NavigationBar";
import PatientsCard from "../components/PatientsCard";

const Home = () => {
    
    return (
        <div className="bg-sky-500/25">
            <NavigationBar />
            <br />
            <PatientsCard />
            <br/>
        </div>
    );
}

export default Home;