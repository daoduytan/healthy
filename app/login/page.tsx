'use client';
import { Center } from '@/components/share';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
    const [values, setValues] = useState<{ email: string; password: string }>({
        email: 'test@email.com',
        password: '123456789',
    });

    function onSubmit(e: FormEvent) {
        e.preventDefault();

        localStorage.setItem('auth', JSON.stringify(values));
        window.location.pathname = '/';
    }

    return (
        <Center className="min-h-[768px]">
            <form className="grid gap-3" onSubmit={onSubmit}>
                <div className="text-center text-xl py-8">Login</div>
                <input
                    value={values.email}
                    className="border rounded px-3 py-2 border-gray/400"
                />
                <input
                    type="password"
                    value={values.password}
                    className="border rounded px-3 py-2 border-gray/400"
                />
                <button className="bg-primary/400 text-light py-2 rounded">
                    Login
                </button>
            </form>
        </Center>
    );
}
