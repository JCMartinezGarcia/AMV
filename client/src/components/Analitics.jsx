import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Registrio Mensual de Pacientes ',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        // {
        //     label: 'Pacientes',
        //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // },
        {
            label: 'Pacientes',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const Analitics = () => {
    return (
        <div className='p-4'>
            <Bar options={options} data={data} />
        </div>
    );
}

export default Analitics;