import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Card, CardBody, Input, Button, Alert } from "@heroui/react";
import Swal from "sweetalert2";
const Register = () => {
    const { register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(email, password);
            Swal.fire({
                icon: "success",
                title: "Registro Exitoso",
                text: "El usuario fue registrado con exito. Serás redirigido a la página de Login",
                confirmButtonText: "Ok",
            });
        } catch (error) {
            Swal.fire({
                icon: "Error",
                title: error.response?.data?.error || "Registro Fallido",
                text: error.response?.data?.error,
                confirmButtonText: "Ok",
            });
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-sky-500/25">
            <Card>
                <CardBody>
                    <form onSubmit={handleSubmit} className="flex flex-col w-80 gap-4 p-6">
                        <h2 className="text-xl font-bold text-center">Registrarse</h2>
                        <Input
                            size="lg"
                            type="email"
                            placeholder="Correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            size="lg"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" className="bg-blue-500 text-white p-2 rounded">Registrarse</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Register;
