import React from "react";
import getImg from '../../assets/user.png';

const GetStarted = () => {
  return (
    <div className="w-11/12 mx-auto mt-30">
        <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="font-bold text-3xl mb-2">Get Started in 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 ">
        <div className="flex flex-col justify-center items-center shadow-xl p-8 space-y-3 rounded-xl">
          <img src={getImg} alt="" />
          <h1 className="font-bold text-xl">Create Account</h1>
          <p className="text-center">
            Sign up for free in seconds. No credit card <br />
            required to get started.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl p-8 space-y-3 rounded-xl">
          <img src={getImg} alt="" />
          <h1 className="font-bold text-xl">Create Account</h1>
          <p className="text-center">
            Sign up for free in seconds. No credit card <br />
            required to get started.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center shadow-xl p-8 space-y-3 rounded-xl">
          <img src={getImg} alt="" />
          <h1 className="font-bold text-xl">Create Account</h1>
          <p className="text-center">
            Sign up for free in seconds. No credit card <br />
            required to get started.
          </p>
        </div>

      </div>
    </div>
  );
};

export default GetStarted;
