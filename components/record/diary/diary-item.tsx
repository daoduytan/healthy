import { inter, noto_sans_jp } from '@/config/fonts';
import { twMerge } from 'tailwind-merge';

export function DiaryItem() {
    return (
        <div className="grid gap-[15px] border-2 border-[#707070] p-[15px]">
            <div
                className={twMerge('text-[lg] text-dark/500', inter.className)}
            >
                2021.05.21 <br />
                23:25
            </div>
            <div
                className={twMerge(
                    'text-dark/500 text-xs leading-[17px] pb-[15px]',
                    noto_sans_jp.className
                )}
            >
                私の日記の記録が一部表示されます。
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
            </div>
        </div>
    );
}
