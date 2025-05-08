import React, { use, useEffect, useSyncExternalStore } from 'react';
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { NavLink } from 'react-router';
import { SiFampay } from 'react-icons/si';
import { FaHome } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa6';
import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../../Context/AuthContext';
import { clearLocalPaymentData, getBalance, setBalance, subscribeToBalance } from '../../Utilities/localStorage';
const Navbar = () => {
  const { user, signOutUser } = use(AuthContext);
  const balance = useSyncExternalStore(subscribeToBalance, getBalance);
  useEffect(() => {
    const initialBalance = localStorage.getItem('userBalance');
    if (!initialBalance) {
      setBalance(10000);  
    }
  }, [])
  
  const handleSignOut = () => {
    signOutUser().then(() => {
      clearLocalPaymentData();
      alert('Log Out Successfully')
    }).catch(error=>console.log(error))
  }
const nav = (
    <>
      <NavLink to="/" className={({ isActive }) =>isActive ? ' text-purple-900 font-bold underline' : ''}> <ul className='menu menu-horizontal px-1'><li className="px-4 list-none"><span><FaHome />Home</span></li></ul></NavLink>
      <NavLink to="/bills" className={({ isActive }) =>isActive ? 'text-purple-900 font-bold underline' : ''}> <ul className='menu menu-horizontal'><li className="px-4 list-none"><span><FaAmazonPay />Bills</span></li></ul></NavLink>
      <NavLink to="/profile" className={({ isActive }) =>isActive ? 'text-purple-900  font-bold underline' : ''}> <ul className='menu menu-horizontal'><li className="px-4 list-none"><span><CgProfile />Profile</span></li></ul></NavLink>
     
    </>
  );
  const navEnd = (
    <div className='flex gap-2'>
      {user ? <>
        <span className='text-purple-800 font-bold font-[sora] text-[12px] mt-3 ml-4 hidden md:flex'>{user?.displayName}</span>
        <NavLink onClick={handleSignOut} to="/login" className='btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6 hidden'>Logout</NavLink>
      </> : <NavLink to="/login" className='btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6'>Login</NavLink>}
     
     {user? <> <div className="dropdown dropdown-hover">
  <div tabIndex={0}><button className='btn btn-circle w-10'><img src={user?.photoURL} className='w-8 h-8 rounded-full mt-1' /></button></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 mr-40 shadow-sm">
    <li><h4 className='mb-2'>{balance} tk</h4></li>
    <li><NavLink onClick={handleSignOut} to="/login" className='btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6'>Logout</NavLink></li>
  </ul>
</div> </>  : <NavLink to="/register" className='btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6'>SingUp</NavLink> } 
    </div>
  );
  return (
    <div className="navbar sticky top-0 bg-gray-100 z-1">
      <div className="navbar-start flex items-center mx-10">
        <div className="dropdown md:hidden">
          <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn m-1">
              <IoIosArrowDropdownCircle />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
              {nav}
            </ul>
          </div>
        </div>
        <h1 className="font-[sora] font-bold text-2xl flex items-center-safe text-purple-900">
          <SiFampay size="30px" />

          <span className="text-red-600">S</span>
          <span className="text-green-800">o</span>
          <span>hay</span>
        </h1>
      </div>
      <div className="navbar-center justify-center items-center gap-4 ">
        <div className="md:flex hidden text-xl">{nav}</div>
        <div className="md:hidden flex">{navEnd}</div>
      </div>
      <div className="navbar-end mx-20 md:flex hidden">{navEnd}</div>
    </div>
  );
};

export default Navbar;