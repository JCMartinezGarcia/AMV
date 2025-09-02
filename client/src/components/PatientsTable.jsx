import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  Textarea,
} from "@heroui/react";
import axios from "axios";
import Swal from "sweetalert2";

const PatientsTable = ({ patients, reload }) => {
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;
  const pages = Math.max(1, Math.ceil(patients.length / rowsPerPage));

  // Modal state
  const [modalType, setModalType] = useState(null); // "details" | "update" | null
  const [updatePatient, setUpdatePatient] = useState({});
  const [detailsPatient, setDetailsPatient] = useState({});

  const [loading, setLoading] = useState(false);

  // Modal open/close logic
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => {
    setIsOpen(false);
    setModalType(null);
  };

  // Error handler
  const handleError = (message, error) => {
    console.error(`${message}:`, error.message);
  };

  // Delete patient
  const handleDeletePatient = (id) => {
    Swal.fire({
      icon: "question",
      title: "Eliminar Registro",
      text: "¿Quieres eliminar este registro?",
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
  };

  const deletePatient = async (id) => {
    try {
      const response = await axios.delete(`patients/delete/${id}`);
      return response.status === 200;
    } catch (error) {
      handleError("Server Error:", error);
    }
  };

  // Update patient
  const handleUpdatePatient = (patient) => {
    setUpdatePatient(patient);
    setModalType("update");
    onOpen();
  };

  const editPatient = async (id, patientData) => {
    try {
      setLoading(true);
      const response = await axios.put(`patients/update/${id}`, patientData);
      if (response.data) {
        reload();
        setLoading(false);
        Swal.fire({
          icon: "success",
          title: "Paciente Actualizado",
          confirmButtonText: "Ok",
        });
        onClose();
      }
    } catch (error) {
      setLoading(false);
      handleError("Server Error:", error);
    }
  };

  const onUpdateSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    editPatient(updatePatient.id, data);
  };

  // Details
  const handleDetailsPatient = (patient) => {
    setDetailsPatient(patient);
    setModalType("details");
    onOpen();
  };

  // Table pagination
  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return patients.slice(start, start + rowsPerPage);
  }, [page, patients]);

  return (
    <div className="w-full">
      <Table
        aria-label="Pacientes registrados"
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
        classNames={{ wrapper: "min-h-[222px]" }}
      >
        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Edad</TableColumn>
          <TableColumn className="text-center">Acciones</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No hay pacientes registrados.">
          {items.map((patient) => (
            <TableRow key={patient.id}>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.age}</TableCell>
              <TableCell className="space-x-2 text-center">
                <Button
                  size="sm"
                  color="primary"
                  onPress={() => handleUpdatePatient(patient)}
                >
                  Editar
                </Button>
                <Button
                  size="sm"
                  color="secondary"
                  onPress={() => handleDetailsPatient(patient)}
                >
                  Ver
                </Button>
                <Button
                  size="sm"
                  color="danger"
                  onPress={() => handleDeletePatient(patient.id)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* MODAL */}
      <Modal isOpen={isOpen} onOpenChange={onClose}>
        <ModalContent>
          {modalType === "update" ? (
            <>
              <ModalHeader>Actualizar Paciente</ModalHeader>
              <ModalBody>
                <form onSubmit={onUpdateSubmit} className="space-y-4">
                  <Input
                    isRequired
                    label="Nombre"
                    name="name"
                    defaultValue={updatePatient.name}
                  />
                  <Input
                    isRequired
                    type="number"
                    label="Edad"
                    name="age"
                    defaultValue={updatePatient.age}
                  />
                  <Textarea
                    isRequired
                    label="Síntomas"
                    name="symptoms"
                    defaultValue={updatePatient.symptoms}
                  />
                  <Button
                    type="submit"
                    color="primary"
                    className="w-full"
                    isLoading={loading}
                  >
                    Guardar
                  </Button>
                </form>
              </ModalBody>
            </>
          ) : modalType === "details" ? (
            <>
              <ModalHeader>Detalles del Paciente</ModalHeader>
              <ModalBody>
                <div>
                  <label className="font-bold">Nombre:</label>
                  <p>{detailsPatient.name}</p>
                </div>
                <div>
                  <label className="font-bold">Edad:</label>
                  <p>{detailsPatient.age}</p>
                </div>
                <div>
                  <label className="font-bold">Síntomas:</label>
                  <p>{detailsPatient.symptoms}</p>
                </div>
              </ModalBody>
            </>
          ) : null}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default PatientsTable;
