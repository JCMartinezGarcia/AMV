import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Tooltip,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
    useDisclosure,
    Form,
    Input,
    Textarea,
} from "@heroui/react";

import Swal from "sweetalert2";
import axios from "axios";

export const columns = [
    { name: "NOMBRE", uid: "name" },
    { name: "EDAD", uid: "age" },
    { name: "SINTOMAS", uid: "symptoms" },
    { name: "ACTIONS", uid: "actions" },
];

// export const users = [
//     {
//         id: 1,
//         name: "Tony Reichert",
//         role: "CEO",
//         team: "Management",
//         status: "active",
//         age: "29",
//         avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
//         email: "tony.reichert@example.com",
//     },
//     {
//         id: 2,
//         name: "Zoey Lang",
//         role: "Technical Lead",
//         team: "Development",
//         status: "paused",
//         age: "25",
//         avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
//         email: "zoey.lang@example.com",
//     },
//     {
//         id: 3,
//         name: "Jane Fisher",
//         role: "Senior Developer",
//         team: "Development",
//         status: "active",
//         age: "22",
//         avatar: "https://i.pravatar.cc/150?u=a04258114e29026702d",
//         email: "jane.fisher@example.com",
//     },
//     {
//         id: 4,
//         name: "William Howard",
//         role: "Community Manager",
//         team: "Marketing",
//         status: "vacation",
//         age: "28",
//         avatar: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
//         email: "william.howard@example.com",
//     },
//     {
//         id: 5,
//         name: "Kristen Copper",
//         role: "Sales Manager",
//         team: "Sales",
//         status: "active",
//         age: "24",
//         avatar: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
//         email: "kristen.cooper@example.com",
//     },
// ];

export const EyeIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 20 20"
            width="1em"
            {...props}
        >
            <path
                d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const DeleteIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 20 20"
            width="1em"
            {...props}
        >
            <path
                d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M8.60834 13.75H11.3833"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M7.91669 10.4167H12.0834"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

export const EditIcon = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="1em"
            role="presentation"
            viewBox="0 0 20 20"
            width="1em"
            {...props}
        >
            <path
                d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M2.5 18.3333H17.5"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

// const statusColorMap = {
//     active: "success",
//     paused: "danger",
//     vacation: "warning",
// };

export default function PatientsTable({ patients, reload }) {

    const [page, setPage] = React.useState(1);
    const [updatePatient, setUpdatePatient] = useState({});
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [loading, setLoading] = useState(false);

    const rowsPerPage = 6;
    const pages = Math.ceil(patients.length / rowsPerPage);
    const patientItems = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return patients.slice(start, end);
    }, [page, patients]);


    const renderCell = React.useCallback((patient, columnKey) => {
        const cellValue = patient[columnKey];

        switch (columnKey) {
            // case "name":
            //     return (
            //         <User
            //             avatarProps={{ radius: "lg", src: user.avatar }}
            //             description={patient.email}
            //             name={cellValue}
            //         >
            //             {user.email}
            //         </User>
            //     );
            // case "role":
            //     return (
            //         <div className="flex flex-col">
            //             <p className="text-bold text-sm capitalize">{cellValue}</p>
            //             <p className="text-bold text-sm capitalize text-default-400">{patient.team}</p>
            //         </div>
            //     );
            // case "status":
            //     return (
            //         <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            //             {cellValue}
            //         </Chip>
            //     );
            case "actions":
                return (
                    <div className="relative flex items-center gap-2">
                        <Tooltip content="Detalles">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Tooltip>
                        <Tooltip content="Editar Paciente">
                            <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={() => handleUpdatePatient(patient)}>
                                <EditIcon />
                            </span>
                        </Tooltip>
                        <Tooltip color="danger" content="Eliminar Paciente">
                            <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => handleDeletePatient(patient.id)}  >
                                <DeleteIcon />
                            </span>
                        </Tooltip>
                    </div>
                );
            default:
                return cellValue;
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        const data = Object.fromEntries(new FormData(e.currentTarget));
        setTimeout(() => {
            editPatient(updatePatient.id, data);
        }, 2000);
    };

    const handleError = (message, error) => {
        console.error(`${message}:`, error);
    }

    const deletePatient = async (id) => {
        try {
            const response = await axios.delete(`patients/delete/${id}`);
            return (response.status = 200) ? true : false;
        } catch (error) {
            handleError('Server Error:', error);
        }
    }

    const editPatient = async (id, data) => {
        try {
            const response = await axios.put(`patients/update/${id}`, data);
            if (response.data) {
                setLoading(false);
                Swal.fire({
                    icon: "success",
                    title: "Paciente Editado",
                    text: "Los datos del paciente se acualizaron",
                    confirmButtonText: "OK",

                }).then(async (result) => {
                    if (result.isConfirmed) {
                        reload();
                    }
                });
            }
        } catch (error) {
            handleError('Server Error:', error);
        }
    }

    const handleUpdatePatient = (patient) => {
        setUpdatePatient(patient);
        onOpen();
    }

    const handleDeletePatient = (id) => {
        Swal.fire({
            icon: "question",
            title: "Eliminar Registro",
            text: "Quieres elimnar este registro?",
            confirmButtonText: "Eliminar",
            showCancelButton: true,

        }).then(async (result) => {
            if (result.isConfirmed) {
                if (await deletePatient(id)) {
                    reload();
                    Swal.fire("Paciente eliminado!", "", "success");
                }
            }
        });
    }

    return (
        <>

            <Modal isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Actualizar Paciente</ModalHeader>
                            <ModalBody>
                                <Form onSubmit={onSubmit}>
                                    <Input
                                        endContent={''
                                            // <MailIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
                                        }
                                        name="name"
                                        label="Nombre del Paciente"
                                        placeholder="Ingresa el nombre del paciente"
                                        variant="bordered"
                                        defaultValue={updatePatient.name}
                                    />
                                    <Input
                                        endContent={''
                                            // <LockIcon className="text-2xl text-default-400 pointer-events-none shrink-0" />
                                        }
                                        name="age"
                                        label="Edad del Paciente"
                                        placeholder="Ingresa la edad del paciente"
                                        type="number"
                                        variant="bordered"
                                        defaultValue={updatePatient.age}
                                    />
                                    <Textarea
                                        label="Sintomas del Paciente"
                                        placeholder="Ingresa los sintomas del paciente"
                                        name="symptoms"
                                        variant="bordered"
                                        defaultValue={updatePatient.symptoms}
                                    />
                                    <div className="flex justify-end w-full m-2">
                                        <Button color="danger" variant="flat" onPress={onClose}>
                                            Cancelar
                                        </Button>&nbsp;
                                        {(loading) ?
                                            <Button isLoading color="primary"></Button> :
                                            <Button color="primary" type="submit">
                                                Actualizar
                                            </Button>
                                        }
                                    </div>
                                </Form>
                            </ModalBody>
                            {/* <ModalFooter></ModalFooter> */}
                        </>
                    )}
                </ModalContent>
            </Modal>
            
            <div className="flex flex-row justify-center m-4">
                <Table
                    className="basis-210"
                    aria-label="Example table with custom cells"
                    bottomContent={
                        <div className="flex w-full justify-center">
                            <Pagination
                                isCompact
                                showControls
                                showShadow
                                color="primary"
                                page={page}
                                total={pages}
                                onChange={(page) => setPage(page)}
                            />
                        </div>
                    }
                    classNames={{
                        wrapper: "min-h-[222px]",
                    }}
                >
                    <TableHeader columns={columns}>
                        {(column) => (
                            <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                {column.name}
                            </TableColumn>
                        )}
                    </TableHeader>
                    <TableBody items={patientItems}>
                        {(item) => (
                            <TableRow key={item.id}>
                                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}

