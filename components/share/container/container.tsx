import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'div'>;

export function Container({ className, ...props }: Props) {
    return (
        <div
            className={twMerge('mx-auto max-w-[990px] px-[15px]', className)}
            {...props}
        />
    );
}
