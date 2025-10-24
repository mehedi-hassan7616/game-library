import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
const AuthLayout = () => {
    return (
        <div>
            <header className='container mx-auto'><Navbar></Navbar></header>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};
export default AuthLayout;