import React from 'react'
 import { Outlet } from 'react-router-dom';
import { Headers } from '../../header/Header';

  const Layout = () => {
    return (
        <div>
            <div className='bg-[rgb(13,0,49)]'> 
                <Headers />
            </div>

            <Outlet />
        </div>
    )
}

export default Layout
