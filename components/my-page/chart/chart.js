import { Chart as ChartUI} from '@/components/share';
import { faker } from '@faker-js/faker';

export function Chart() {
    const labels = [
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
    ];

    const initialData = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() =>
                    faker.number.int({ min: -1000, max: 1000 })
                ),
                borderColor: '#FFCC21',
                backgroundColor: '#FFCC21',
                pointStyle: 'circle',
                pointRadius: 4,
                pointHoverRadius: 7,
            },
            {
                label: 'Dataset 2',
                data: labels.map(() =>
                    faker.number.int({ min: -1000, max: 1000 })
                ),
                borderColor: '#8FE9D0',
                backgroundColor: '#8FE9D0',
                pointStyle: 'circle',
                pointRadius: 4,
                pointHoverRadius: 7,
            },
        ],
    };
    return (
        <div className='h-[300px]'>
<ChartUI data={initialData} />
        </div>
        
    )
}
