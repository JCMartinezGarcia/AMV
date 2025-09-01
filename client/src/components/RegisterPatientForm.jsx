import React, { useState } from "react";
import { Form, Input, Button, Textarea, Card, CardBody } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const RegisterPatientForm = ({ reloadPatientsCount }) => {
    const [submitted, setSubmitted] = useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message || error);
        Swal.fire({
            icon: "error",
            title: "Error en el servidor",
            text: "No se pudo registrar el paciente. Intenta nuevamente.",
            confirmButtonText: "Ok",
        });
        setLoading(false);
    };

    const registerPatient = async (patientData) => {
        try {
            const response = await axios.post("patients/register", patientData);
            if (response.data) {
                setTimeout(() => {
                    setLoading(false);
                    Swal.fire({
                        icon: "success",
                        title: "Registro Exitoso!",
                        text: "El paciente fue registrado satisfactoriamente",
                        confirmButtonText: "Ok",
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            // ✅ Refresh counter in PatientsRegister page
                            if (reloadPatientsCount) {
                                await reloadPatientsCount();
                            }
                            navigate("/patients");
                        }
                    });
                }, 1000);
            }
        } catch (error) {
            handleError("Server Error:", error);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = Object.fromEntries(new FormData(e.currentTarget));
        setSubmitted(data);
        registerPatient(data);
    };

    return (
        <Card className="w-1/2 m-auto max-w-xs p-4">
            <CardBody>
                <Form className="w-full" onSubmit={onSubmit}>
                    <Input
                        isRequired
                        errorMessage="Por favor ingresa el nombre"
                        label="Nombre del Paciente"
                        labelPlacement="outside"
                        name="name"
                        placeholder="Ingresa el nombre completo"
                        type="text"
                    />
                    <Input
                        isRequired
                        errorMessage="Por favor ingresa la edad"
                        label="Edad del Paciente"
                        labelPlacement="outside"
                        name="age"
                        placeholder="Ingresa la edad"
                        type="number"
                    />
                    <Textarea
                        isRequired
                        errorMessage="Por favor ingresa los síntomas"
                        className="max-w-xs"
                        label="Síntomas del Paciente"
                        name="symptoms"
                        labelPlacement="outside"
                        placeholder="Escribe los síntomas del paciente"
                    />

                    {loading ? (
                        <Button
                            isLoading
                            className="w-full"
                            type="submit"
                            size="lg"
                            color="primary"
                        />
                    ) : (
                        <Button
                            className="w-full"
                            type="submit"
                            size="lg"
                            color="primary"
                        >
                            Registrar
                        </Button>
                    )}

                    <Button
                        className="w-full mt-2"
                        size="lg"
                        color="default"
                        onPress={() => navigate("/patients")}
                    >
                        Cancelar
                    </Button>
                </Form>
            </CardBody>
        </Card>
    );
};

export default RegisterPatientForm;
