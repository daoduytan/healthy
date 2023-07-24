import { noto_sans_jp } from '@/config/fonts';
import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'button'>;

export function LoadMore(props: Props) {
    return (
        <button
            {...props}
            className={twMerge(
                'inline-block w-[296px] h-[56px] rounded-md text-light text-lg font-light bg-gradient-to-t from-[#ffcc21] to-[#ff963c]',
                noto_sans_jp.className
            )}
        />
    );
}
