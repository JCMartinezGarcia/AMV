import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const RegisterPatientButton = () => {
    const navigate = useNavigate();

    return (
        <Button
            size="md"
            color="primary"
            onPress={() => navigate("/patients/register")}
        >
            Registrar Paciente
        </Button>
    );
};

export default RegisterPatientButton;
