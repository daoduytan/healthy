import { inter, noto_sans_jp } from '@/config/fonts';
import { type ColumnItem } from '@/models/column';
import { twMerge } from 'tailwind-merge';

type Props = {
    column: ColumnItem;
};

export function ColumnItem({ column }: Props) {
    return (
        <div className="flex gap-1 flex-col h-[144px] items-center justify-center bg-dark/600 text-center">
            <div
                className={twMerge(
                    'uppercase text-[22px] text-primary/300',
                    inter.className
                )}
            >
                {column.label}
            </div>
            <div className="inline-block w-[56px] h-[1px] bg-gray/400" />
            <div
                className={twMerge(
                    ' text-light font-light text-lg',
                    noto_sans_jp.className
                )}
            >
                {column.sub}
            </div>
        </div>
    );
}
