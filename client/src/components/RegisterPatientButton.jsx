import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";

const RegisterPatientButton = () => {

    const navigate = useNavigate();

    const handleRegisterPatient = () => {
        navigate('/patients/register');
    }

    return (
        <div>
            <Button
                size="md"
                radius="none"
                color="primary"
                onPress={() => handleRegisterPatient()}
            >
                Registrar Peciente
            </Button>
        </div>
    );
}

export default RegisterPatientButton;