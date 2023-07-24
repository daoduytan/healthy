import { inter } from '@/config/fonts';
import { type DishType } from '@/models/dish';
import { useDishs } from 'context/dish.context';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

type Props = {
    type: DishType;
};

export function FilterDishItem({ type }: Props) {
    const { selectDishType } = useDishs();

    function handleClick() {
        selectDishType(type);
    }

    const isSnack = type === 'Snack';

    console.log({ inter });

    return (
        <div
            onClick={handleClick}
            className="flex flex-col items-center justify-center w-[136px] h-[136px] cursor-pointer bg-[url('/icons/bg-filter-btn.svg')] bg-no-repeat bg-center"
        >
            <span>
                <Image
                    width={isSnack ? 34 : 56}
                    height={isSnack ? 40 : 56}
                    alt={type}
                    src={
                        !isSnack
                            ? '/icons/icon-knife.svg'
                            : '/icons/icon-snack.svg'
                    }
                />
            </span>
            <span
                className={twMerge(
                    'text-[20px] font-normal text-light',
                    inter.className
                )}
            >
                {type}
            </span>
        </div>
    );
}
