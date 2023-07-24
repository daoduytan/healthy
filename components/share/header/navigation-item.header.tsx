'use client';
import { type MenuItemHeader } from '@/config/app.config';
import { noto_sans_jp } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type Props = {
    menu: MenuItemHeader;
};

export function NavigationItemHeader({ menu }: Props) {
    const pathname = usePathname();

    const isActive = pathname === menu.href;

    return (
        <Link
            href={menu.href}
            className={twMerge(
                'flex gap-2 items-center ',
                isActive ? 'text-primary/400' : 'text-light'
            )}
        >
            <span className="inline-block relative">
                <Image src={menu.icon} width={32} height={32} alt="" />
                {menu.notification && (
                    <span className="absolute top-0 right-[-7px] inline-flex items-center justify-center rounded-full w-[16px] h-[16px] text-light text-[10px] bg-primary/500">
                        {menu.notification}
                    </span>
                )}
            </span>

            <span className={twMerge('font-light', noto_sans_jp.className)}>
                {menu.label}
            </span>
        </Link>
    );
}
