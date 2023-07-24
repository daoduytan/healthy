'use client';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
} from 'chart.js';
import { faker } from '@faker-js/faker';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false,
            position: 'top' as const,
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        x: {
            beginAtZero: true,
            border: { color: 'transparent' },
            ticks: {
                display: true,
            },
            grid: {
                color: '#777',
            },
        },
        y: {
            beginAtZero: true,
            ticks: {
                display: false,
            },
            grid: {
                // display: false,
                color: 'transparent',
            },
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
        },
        {
            label: 'Dataset 2',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
        },
    ],
};

type Props = {
    // width: number;
    // height: number;
    data: ChartData<'line'>;
};

export function Chart({ data }: Props) {
    return <Line options={options} data={data} />;
}
