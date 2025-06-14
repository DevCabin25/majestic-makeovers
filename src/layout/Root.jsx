import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import Footer from '../components/Footer/Footer';

import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
             <Outlet/>
             
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;