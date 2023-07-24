import { noto_sans_jp } from '@/config/fonts';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'button'> & { isActive?: boolean };

export function BtnFilterChart({ isActive, className, ...props }: Props) {
    return (
        <button
            {...props}
            className={twMerge(
                'inline-block h-[24px] w-[56px] rounded-[11px] font-light text-[15px] pb-2',
                noto_sans_jp.className,
                className,
                isActive
                    ? 'bg-primary/300 text-light'
                    : 'bg-light text-primary/300'
            )}
        />
    );
}
