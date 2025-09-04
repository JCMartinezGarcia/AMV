import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, Input, Button, Alert } from "@heroui/react";

const Login = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
        } catch (error) {
            alert(error.response?.data?.error || "Login failed");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-sky-500/25">
            <Card>
                <CardBody>
                    <div className="flex items-center justify-center w-full">
                        <div className="flex flex-col w-full">
                            <div key={'primary'} className="w-full flex items-center">
                                <Alert color={'primary'} title={'Si ya tienes una cuenta, inicia sesión.'} />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col w-80 gap-4 p-6">
                        <h2 className="text-xl font-bold text-center">Login</h2>
                        <Input
                            size="lg"
                            type="email"
                            placeholder="Correo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isRequired
                        />
                        <Input
                            size="lg"
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            isRequired
                        />
                        <Button type="submit" className="bg-blue-500 text-white p-2 rounded">Login</Button>
                        <Button className="bg-gray-500 text-white p-2 rounded" onPress={() => navigate('/register')}>Registrarse</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Login;
