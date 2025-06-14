import React from 'react';
import Navbar from '../components/Navbar/Navbar';

import Footer from '../components/Footer/Footer';

import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
      <Navbar></Navbar>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <Footer></Footer>
    </div>
    );
};

export default Root;