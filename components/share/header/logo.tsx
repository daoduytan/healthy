import { appTitle } from '@/config/app.config';
import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
    return (
        <Link className="inline-block" href="/">
            <Image src="/logo.svg" width={109} height={40} alt={appTitle} />
        </Link>
    );
}
