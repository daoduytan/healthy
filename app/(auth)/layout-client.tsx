'use client';

import { Center, Loading } from '@/components/share';
import { AuthContext, useAuth } from 'context/auth.contex';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function AuthLayoutClient({ children }: Props) {
    const {
        state: { isLoading },
    } = useAuth();

    if (isLoading) {
        return (
            <Center className="h-screen w-screen">
                <Loading />
            </Center>
        );
    }

    return <AuthContext>{children}</AuthContext>;
}
