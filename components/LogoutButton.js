'use client';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const LogoutButton = () => {
    const router = useRouter();
    return (
        <button onClick={() => {
            Cookies.remove('token');
            Cookies.remove('user');
            router.push('/login');
        }
        } className="px-8 py-2 bg-red-700 rounded">Logout</button>
    )
};

export default LogoutButton;