'use client';

import { Chart } from '@/components/share';
import { BtnFilterChart } from './btn-filter-chart';
import { useBodyRecord } from '@/hooks/record.hooks';
import { faker } from '@faker-js/faker';

export function BodyRecord() {
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
        <div id="body_record" className="flex flex-col bg-dark/500 p-[24px] ">
            <div className="flex gap-[30px] items-center text-light mb-2">
                <div className="text-[15px] uppercase text-light">
                    Body <br />
                    Record
                </div>
                <div className="text-[22px]">2021.05.21</div>
            </div>

            <div className="grid gap-2">
                <div className="h-[190px]">
                    <Chart data={initialData} />
                </div>

                <div className="flex gap-[16px]">
                    <BtnFilterChart>日</BtnFilterChart>
                    <BtnFilterChart>週</BtnFilterChart>
                    <BtnFilterChart>月</BtnFilterChart>
                    <BtnFilterChart isActive>年</BtnFilterChart>
                </div>
            </div>
        </div>
    );
}
