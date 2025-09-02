import React, { useState } from "react";
import { Form, Input, Button, Textarea, Card, CardBody } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from "axios";

const RegisterPatientForm = () => {

    const [submitted, setSubmitted] = React.useState(null);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleError = (message, error) => {
        console.error(`${message}:`, error.message);
    }

    const registerPatient = async (patientData) => {
        try {
            const response = await axios.post('patients/register', patientData);
            if (response.data) {
                setTimeout(() => {
                    setLoading(false);
                    Swal.fire({
                        icon: "success",
                        title: "Registro Exitoso!",
                        text: "El paciente fue registrado satisfactoriamente",
                        confirmButtonText: "Ok",
                    }).then((result) => {
                        if (result.isConfirmed) {
                            navigate('/patients');
                        }
                    });

                }, 2000);
            }
        } catch (error) {
            handleError('Server Error:', error);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = Object.fromEntries(new FormData(e.currentTarget));
        setSubmitted(data);
        registerPatient(data);
    };


    return (
        <div>
            <Card className="w-1/2 m-auto max-w-xs p-4">
                <CardBody>
                    <Form className="w-full" onSubmit={onSubmit}>
                        <Input
                            isRequired
                            errorMessage="Porfavor ingresa tu nombre"
                            label="Nombre del Paciente"
                            labelPlacement="outside"
                            name="name"
                            placeholder="ingresa tu nombre"
                            type="text"
                        />
                        <Input
                            isRequired
                            errorMessage="Porfavor ingresa tu edad"
                            label="Edad del Paciente"
                            labelPlacement="outside"
                            name="age"
                            placeholder="Ingresa tu edad"
                            type="number"
                        />
                        <Textarea
                            isRequired
                            errorMessage="Porfavor ingresa los simtomas del paciente"
                            className="max-w-xs"
                            label="Sintomas del Paciente"
                            name="symptoms"
                            labelPlacement="outside"
                            placeholder="Escribe los sintomas del paciente"
                        />

                        {
                            (loading) ? <Button
                                isLoading
                                className="w-full"
                                type="submit"
                                size="lg"
                                color="primary"
                            > </Button> :
                                <Button
                                    className="w-full"
                                    type="submit"
                                    size="lg"
                                    color="primary"
                                >Registrar</Button>
                        }
                        <Button
                            className="w-full"
                            size="lg"
                            color="default"
                            onPress={() => navigate('/patients')}
                        >Cancelar</Button>

                        {/* {submitted && (
                            <div className="text-small text-default-500">
                                You submitted: <code>{JSON.stringify(submitted)}</code>
                            </div>
                        )} */}
                    </Form>
                </CardBody>
            </Card>
        </div >
    );
}

export default RegisterPatientForm;