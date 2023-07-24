'use client';

import { ExerciseItem } from './exercise-item';
import { Scrollbar } from 'react-scrollbars-custom';

export function Exercise() {
    return (
        <div id="my_exercise" className="flex flex-col bg-dark/500 p-[24px] ">
            <div className="flex gap-[30px] items-center text-light mb-2">
                <div className="text-[15px] uppercase text-light">
                    My <br />
                    Exercise
                </div>
                <div className="text-[22px]">2021.05.21</div>
            </div>

            <Scrollbar style={{ height: 200 }}>
                <div className="grid grid-cols-2 gap-x-[30px] pr-5">
                    {Array.from(Array(16).keys()).map((item) => (
                        <ExerciseItem key={item} />
                    ))}
                </div>
            </Scrollbar>
        </div>
    );
}
