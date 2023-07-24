import { footerMenus } from '@/config/app.config';
import Link from 'next/link';
import { Container } from '../container';
import { twMerge } from 'tailwind-merge';
import { noto_sans_jp } from '@/config/fonts';

export function Footer() {
    return (
        <footer className="bg-dark/500 ">
            <Container>
                <nav className="flex items-center min-h-[120px] gap-[45px]">
                    {footerMenus.map((item) => (
                        <Link
                            className={twMerge(
                                'text-light text-[11px] font-light',
                                noto_sans_jp.className
                            )}
                            key={item.label}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
            </Container>
        </footer>
    );
}
