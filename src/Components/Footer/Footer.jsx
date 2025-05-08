import React from 'react';
import { NavLink } from 'react-router';
import { FaHome } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { FaAmazonPay } from 'react-icons/fa6';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiFampay } from 'react-icons/si';
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-gray-200 text-black">
      <div>
        <h1 className="font-[sora] font-bold text-lg flex items-center-safe text-purple-900">
                  <SiFampay size="20px" />
        
                  <span className="text-red-600">S</span>
                  <span className="text-green-800">o</span>
                  <span>hay</span>
                </h1>
      </div>

      <nav className="grid grid-flow-col gap-4 md:gap-6 text-black text-sm md:text-lg font-[sora]">
        <div className="flex gap-2 justify-center items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? ' text-purple-900 font-bold underline' : ''
            }
          >
            {' '}
            <ul className="menu menu-horizontal px-1">
              <li className="px-4 list-none">
                <span>
                  <FaHome />
                  Home
                </span>
              </li>
            </ul>
          </NavLink>
          <NavLink
            to="/bills"
            className={({ isActive }) =>
              isActive ? 'text-purple-900 font-bold underline' : ''
            }
          >
            {' '}
            <ul className="menu menu-horizontal">
              <li className="px-4 list-none">
                <span>
                  <FaAmazonPay />
                  Bills
                </span>
              </li>
            </ul>
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? 'text-purple-900  font-bold underline' : ''
            }
          >
            {' '}
            <ul className="menu menu-horizontal">
              <li className="px-4 list-none">
                <span>
                  <CgProfile />
                  Profile
                </span>
              </li>
            </ul>
          </NavLink>
        </div>
      </nav>
      <nav>
        
        <div className="grid grid-flow-col gap-4 mb-2 mt-1">
          <NavLink to="https://web.facebook.com/Abedin.always" target="_blank">
            <FaFacebook className="text-2xl text-blue-500"></FaFacebook>
          </NavLink>
          <NavLink
            to="https://www.instagram.com/abedin.always/"
            target="_blank"
          >
            <FaInstagram className="text-2xl text-red-500"></FaInstagram>
          </NavLink>
          <NavLink to="https://github.com/abedinalways" target="_blank">
            <FaGithub className="text-2xl text-black"></FaGithub>
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/sheikh-minhajul-abedin-bb51162a4/"
            target="_blank"
          >
            <FaLinkedin className="text-2xl text-blue-500"></FaLinkedin>
          </NavLink>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;