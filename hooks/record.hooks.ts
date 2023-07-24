import { faker } from '@faker-js/faker';
import { Chart, ChartData } from 'chart.js';
import { useState } from 'react';

const labels = ['6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5'];

export const initialData = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: labels.map(() => faker.number.int({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: '#FFCC21',
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

export function useBodyRecord() {
    const [filter, setFilter] = useState<'day' | 'week' | 'month' | 'year'>(
        'year'
    );
    const [data, setData] = useState<ChartData<'line'>>(initialData);

    return {
        filter,
        data,
    };
}
