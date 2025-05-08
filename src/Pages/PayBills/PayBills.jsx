import React, { useState } from 'react';
import { useLoaderData, useParams, useNavigate } from 'react-router';
import { addPaidBill, getBalance, isBillPaid, setBalance } from '../../Utilities/localStorage';
import toast, { Toaster } from 'react-hot-toast';
import ErrorPage from '../ErrorPage/ErrorPage';

const PayBills = () => {
  const navigate = useNavigate();
  const { id: billIdParam } = useParams();
  const clickBtn = parseInt(billIdParam);
  const data = useLoaderData();
  const clickDetails = data.find(billData => billData.id === clickBtn);
  const [, setPaymentMade] = useState(false);
  if (!clickDetails) {
    return <ErrorPage/>;
  }
  const { bill_type, icon, organization, amount, due_date, id: billUniqueId} = clickDetails || {};
  const handlePayBill = () => {
    const currentBalance = getBalance();
    const amount = parseInt(clickDetails?.amount);
    console.log('Current Balance:', currentBalance);
    console.log('Bill Amount:', amount);
    if (isBillPaid(billUniqueId)) {
      toast.error('This bill has already been paid.');
      return;
    }
    if (currentBalance >= amount) {
      const newBalance = currentBalance - amount;
      setBalance(newBalance);
      addPaidBill(billUniqueId);
      toast.success(`Paid ${organization} bill of ${amount}tk`);
      window.dispatchEvent(new Event('localstorageupdate'));
      setPaymentMade(prev => !prev);
      navigate('/bills');
    } else {
      toast.error('Insufficient balance.');
      console.log('Insufficient balance condition reached.');
    }
  };
  const paid = isBillPaid(billUniqueId);
  return (
    <div className="card shadow-lg w-86 mx-auto border border-purple-400 mt-10 mb-4">
      <figure className=" mx-auto pt-10 w-45">
        <img
          src={icon}
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center text-purple-950 font-[Poppins]">
        <h2 className="card-title">{organization}</h2>
        <p>{bill_type}</p>
        <p> Bill Amount: <span className='font-bold text-teal-800'>{amount}</span> Taka</p>
        <p>Dou Date: {due_date} </p>
        <div className="card-actions">
         <button
            onClick={handlePayBill}
            className={`font-[Poppins] btn border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white text-lg rounded-md w-40 ${paid ? 'btn-disabled' : ''}`}
            disabled={paid}
          >
            {paid ? 'Paid' : 'Pay Bill'}
          </button>
          <Toaster/>
        </div>
        
      </div>
    </div>
  );
};

export default PayBills;