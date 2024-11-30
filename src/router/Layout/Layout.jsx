import React from 'react'
 import { Outlet } from 'react-router-dom';
import { Headers } from '../../header/Header';

  const Layout = () => {
    return (
        <div>
            <div className="bg-[url('/bg1.gif')]  bg-center h-screen">
                <Headers />
            </div>

            <Outlet />
        </div>
    )
}

export default Layout
