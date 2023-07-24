import { noto_sans_jp } from '@/config/fonts';
import { twMerge } from 'tailwind-merge';

export function ExerciseItem() {
    return (
        <div className="flex justify-between border-b border-b-gray/400 pr-[16px] pt-2">
            <div className="flex items-start ">
                <span className="inline-block mr-2 mt-2 w-[7px] h-[7px] bg-light rounded-full" />
                <div>
                    <div
                        className={twMerge(
                            'text-light font-light',
                            noto_sans_jp.className
                        )}
                    >
                        家事全般（立位・軽い
                    </div>
                    <span className="text-[15px] text-primary/300">26kcal</span>
                </div>
            </div>

            <span className="text-lg text-primary/300">10 min</span>
        </div>
    );
}
