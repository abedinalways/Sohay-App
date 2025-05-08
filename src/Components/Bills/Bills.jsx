import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router';
import { getPaidBills, isBillPaid } from '../../Utilities/localStorage';
import { FaCheckCircle } from 'react-icons/fa';

const Bills = () => {
 
  const data = useLoaderData();
  const paidBills = getPaidBills();
  
  return (
    <>
      <Toaster />
      <div className='bg-base-200'>
        <h2 className='text-2xl font-bold text-center text-purple-800'>My Bills</h2>
        <div className='md:px-10 px-4 mx-auto'>
          {data.map(bill => {
            const paid = isBillPaid(bill.id);
            return (
              <div key={bill.id}>
                <div>
                  <div className="flex items-center justify-start gap-4 md:gap-15 border rounded-lg m-2 p-3 font-[sora] border-purple-400 shadow-lg">
                    <figure className='md:w-30 w-15 rounded-full'>
                      <img src={bill.icon} />
                    </figure>
                    <h2 className="text-sm md:text-xl font-bold">{bill.organization}</h2>
                    <p className='text-[10px] md:text-lg'>{bill.bill_type}</p>
                    <p className='text-[10px] md:text-lg'>Amount:{bill.amount}tk</p>
                    <p className='text-[10px] md:text-lg hidden md:inline-block'>Deu date: {bill.due_date}</p>
                    <Link to={`/payBills/${bill.id}`}>
                      <button className=" font-[Poppins] btn border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white text-[10px] md:text-lg rounded-md w-18 md:w-40">Show details
                      </button>
                    </Link>
                    {paid && <FaCheckCircle className="text-green-500" />}
                  </div>
                </div>
              </div>
            )
            
          })}
        </div>
      </div>
    </>
  );
};

export default Bills;