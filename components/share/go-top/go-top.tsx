'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const SCROLL_TOP = 300;

export function GoTop() {
    const [isShow, setIsShow] = useState<boolean>(false);

    function handleGoTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });
    }

    useEffect(() => {
        function handleScroll(this: Document, e: Event) {
            setIsShow(window.pageYOffset > SCROLL_TOP);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!isShow) {
        return null;
    }

    return (
        <div className="fixed bottom-[200px] right-[50px] inline-block cursor-pointer">
            <span onClick={handleGoTop}>
                <Image
                    src="/icons/icon-go-top.svg"
                    width={48}
                    height={48}
                    alt="Go top"
                />
            </span>
        </div>
    );
}
