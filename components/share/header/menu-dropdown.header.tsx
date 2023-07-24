'use client';

import { menusDropdown } from '@/config/app.config';
import { noto_sans_jp } from '@/config/fonts';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export function MenuDropdownHeader() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);

    function handleOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    function handleToggle() {
        setIsOpen((prev) => !prev);
    }

    function gotoPage(href: string) {
        router.push(href);
        handleClose();
    }

    useEffect(() => {
        function handleClick(this: Document, e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handleClose();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="relative" ref={ref}>
            <button onClick={handleToggle}>
                <Image
                    src={
                        !isOpen
                            ? '/icons/icon-header-menu-dropdown.svg'
                            : '/icons/icon-close.svg'
                    }
                    width={32}
                    height={32}
                    alt="Menu dropdown"
                />
            </button>

            {isOpen && (
                <div className="absolute z-40 bg-gray/400 top-full right-0 w-[280px]">
                    {menusDropdown.map((item) => (
                        <a
                            onClick={() => gotoPage(item.href)}
                            key={item.label}
                            className={twMerge(
                                'flex items-center cursor-pointer text-light border-t border-t-[#b5b5b5] first:border-t-none  border-b border-b-[#2e2e2e] last:border-b-none h-[72px] pl-8 pr-4 hover:bg-primary/400 font-light',
                                noto_sans_jp.className
                            )}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
