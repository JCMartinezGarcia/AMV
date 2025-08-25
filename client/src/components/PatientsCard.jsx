import { Card, CardBody } from "@heroui/react";
const PatientsCard = ({ totalOfPatients }) => {
    return (
        <div >
            <Card className="w-60 h-40 m-auto">
                <CardBody>
                    <div><span><img src="src/assets/patients-avatar.svg" className="m-auto" width={60} /></span></div>
                    <span className="text-3xl font-bold m-auto">{totalOfPatients}</span>
                    <p className="text-xs m-auto">Pacientes Registrados</p>
                </CardBody>
            </Card>
        </div>
    );
}

export default PatientsCard;