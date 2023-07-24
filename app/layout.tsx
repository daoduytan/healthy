import { Footer, GoTop, Header } from '@/components/share';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Healthy',
    description: '',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main className="pb-16 min-h-[800px]">{children}</main>
                <Footer />
                <GoTop />
            </body>
        </html>
    );
}
