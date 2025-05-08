import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router';
import { getPaidBills, isBillPaid } from '../../Utilities/localStorage';
import { FaCheckCircle } from 'react-icons/fa';

const Bills = () => {
  const data = useLoaderData();
  const paidBills = getPaidBills();
  const [filterType, setFilterType] = useState('all');

  const billTypes = ['all', ...new Set(data.map(bill => bill.bill_type))];

  const filteredBills =
    filterType === 'all'
      ? data
      : data.filter(bill => bill.bill_type === filterType);

  const handleFilterChange = event => {
    setFilterType(event.target.value);
  };

  return (
    <>
      <Toaster />
      <div className="bg-base-200">
        <h2 className="text-2xl font-bold text-center text-purple-800 py-4">
          My Bills
        </h2>
        <div className="flex justify-center mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-purple-600">
                Filter by Type:
              </span>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={filterType}
              onChange={handleFilterChange}
            >
              {billTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="md:px-10 px-4 mx-auto">
          {filteredBills.map(bill => {
            const paid = isBillPaid(bill.id);
            return (
              <div key={bill.id}>
                <div>
                  <div className="flex items-center justify-start gap-4 md:gap-15 border rounded-lg m-2 p-3 font-[sora] border-purple-400 shadow-lg">
                    <figure className="md:w-30 w-15 rounded-full">
                      <img src={bill.icon} alt={bill.organization} />
                    </figure>
                    <h2 className="text-sm md:text-xl font-bold">
                      {bill.organization}
                    </h2>
                    <p className="text-[10px] md:text-lg">{bill.bill_type}</p>
                    <p className="text-[10px] md:text-lg">
                      Amount: {bill.amount}tk
                    </p>
                    <p className="text-[10px] md:text-lg hidden md:inline-block">
                      Due date: {bill.due_date}
                    </p>
                    <Link to={`/payBills/${bill.id}`}>
                      <button className=" font-[Poppins] btn border border-purple-400 text-purple-600 hover:bg-purple-600 hover:text-white text-[10px] md:text-lg rounded-md w-18 md:w-40">
                        Show details
                      </button>
                    </Link>
                    {paid && <FaCheckCircle className="text-green-500" />}
                  </div>
                </div>
              </div>
            );
          })}
          {filteredBills.length === 0 && filterType !== 'all' && (
            <p className="text-center mt-4 text-gray-600">
              No bills of type '{filterType}' found.
            </p>
          )}
          {data.length > 0 &&
            filteredBills.length === 0 &&
            filterType === 'all' && (
              <p className="text-center mt-4 text-gray-600">
                No bills available.
              </p>
            )}
        </div>
      </div>
    </>
  );
};

export default Bills;
