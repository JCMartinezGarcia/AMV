import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Patients from "./pages/Patients";
import PatientsRegister from "./pages/PatientsRegister";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/patients/register" element={<PatientsRegister />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
