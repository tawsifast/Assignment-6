import React from "react";

const BottomBanner = () => {
  return (
    <div>
      <div className="flex justify-between items-center text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-15">
        <div className="ml-7 md:ml-13">
          <h1 className="font-bold text-4xl">50K+</h1>
          <p>Active Users</p>
        </div>
        <div>
          <h1 className="font-bold text-4xl">200+</h1>
          <p>Premium Tools</p>
        </div>
        <div className="mr-7 md:mr-15">
          <h1 className="font-bold text-4xl">4.9</h1>
          <p>Rating</p>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
