import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = ComponentProps<'div'>;

export function Center({ className, ...props }: Props) {
    return (
        <div
            className={twMerge('flex  items-center justify-center', className)}
            {...props}
        />
    );
}
