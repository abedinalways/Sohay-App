import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router';
import './404.css';
const ErrorPage = () => {
  return (
    <>
      <Navbar />
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="col-sm-10 col-sm-offset-1 text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center">404</h1>
                </div>

                <div className="contant_box_404">
                  <h3 className="h2">Looks like you're lost</h3>

                  <p>The page you are looking for is not available!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-center md:mr-40">
        <Link to={'/'}>
          <button className='btn btn-link border-purple-300 bg-white text-purple-600'>Go To HomePage</button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;