import React from 'react';
import payment from '../../assets/payment.png'
import recharge from '../../assets/Recharge.png'
import send_money from '../../assets/send_money.png'
import cash_out from '../../assets/cash_out.png'
const FeaturesCard = () => {
  return (
    <div className="bg-base-200 py-4 px-2 flex flex-col justify-center ">
      <h2 className="text-center text-3xl text-purple-800 font-bold py-4 font-[sora]">
        One Platform for all Financial Solutions
      </h2>
      <div className="grid md:grid-cols-4 grid-cols-1 justify-around items-center mx-auto gap-5">
        <div className="card bg-base-200 border border-purple-400 shadow-md w-70 h-100">
          <figure className="w-40 mx-auto rounded-full">
            <img src={payment} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-2xl font-[Raleway] font-bold text-purple-900">
              Payment
            </h2>
            <p className="text-lg font-semibold font-[Poppins] text-purple-600">
              Making Payment is now much easier through The Sohay App
            </p>
            <div className="card-actions">
              <button className="btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 border border-purple-400 shadow-md w-70 h-100">
          <figure className="w-40 mx-auto rounded-full">
            <img src={recharge} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-2xl font-[Raleway] font-bold text-purple-900">
             Mobile Recharge
            </h2>
            <p className="text-lg font-semibold font-[Poppins] text-purple-600">
              Recharge any number and get the best offer!
            </p>
            <div className="card-actions">
              <button className="btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 border border-purple-400 shadow-md w-70 h-100">
          <figure className="w-40 mx-auto rounded-full">
            <img src={send_money} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-2xl font-[Raleway] font-bold text-purple-900">
              Send Money
            </h2>
            <p className="text-lg font-semibold font-[Poppins] text-purple-600">
              Send Money from Sohay App to any number instantly
            </p>
            <div className="card-actions">
              <button className="btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="card bg-base-200 border border-purple-400 shadow-md w-70 h-100">
          <figure className="w-40 mx-auto rounded-full">
            <img src={cash_out} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title  text-2xl font-[Raleway] font-bold text-purple-900">
             Cash Out
            </h2>
            <p className="text-lg font-semibold font-[Poppins] text-purple-600">
              Withdraw Cash anytime from the largest Agent and ATM network
            </p>
            <div className="card-actions">
              <button className="btn bg-white text-purple-600 font-bold font-[sora] border-1 border-purple-300 rounded-sm text-md hover:bg-purple-600 hover:text-white px-6">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;