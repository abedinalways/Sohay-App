import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation, } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import Loader from '../../Components/Loader/Loader';

const Root = () => {
  const { state } = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      
      {state == 'loading' ? <Loader /> : <Outlet></Outlet>}
      
      <Footer />
    </div>
  );
};

export default Root;