import { Card, CardBody } from "@heroui/react";
const PatientsCard = ({ total, text, imgUrl }) => {
    return (
        <div>
            <Card className="w-60 h-40 m-4">
                <CardBody>
                    <div><span><img src={imgUrl} className="m-auto" width={60} /></span></div>
                    <span className="text-3xl font-bold m-auto">{total}</span>
                    <p className="text-xs m-auto">{text}</p>
                </CardBody>
            </Card>
        </div>
    );
}

export default PatientsCard;