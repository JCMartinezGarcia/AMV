import { Card, CardBody } from "@heroui/react";

const PatientsCard = ({ total, text, imgUrl }) => {
    return (
        <Card className="w-60 h-44 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardBody className="flex flex-col items-center justify-center text-center space-y-2">
                {/* Icon */}
                <img
                    src={imgUrl}
                    alt="icon"
                    width={50}
                    className="rounded-full bg-sky-100 p-2"
                />

                {/* Total number */}
                <span className="text-3xl font-extrabold text-gray-800">{total}</span>

                {/* Label */}
                <p className="text-sm font-medium text-gray-600">{text}</p>
            </CardBody>
        </Card>
    );
};

export default PatientsCard;
