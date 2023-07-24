'use client';

import { AuthContext } from 'context/auth.contex';
import { ReactNode } from 'react';
import AuthLayoutClient from './layout-client';

type Props = {
    children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
    return (
        <AuthContext>
            <AuthLayoutClient>{children}</AuthLayoutClient>
        </AuthContext>
    );
}
