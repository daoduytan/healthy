import { headerMenu } from '@/config/app.config';
import { noto_sans_jp } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { twJoin, twMerge } from 'tailwind-merge';
import { MenuDropdownHeader } from './menu-dropdown.header';
import { NavigationItemHeader } from './navigation-item.header';

export function NavigationHeader() {
    return (
        <div className="flex items-center gap-[60px]">
            <nav className="flex gap-[36px]">
                {headerMenu.map((item) => (
                    <NavigationItemHeader key={item.label} menu={item} />
                ))}
            </nav>

            <MenuDropdownHeader />
        </div>
    );
}
