import React from "react";

const WorkFlow = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-13 text-white">
        <h1 className="font-bold text-3xl">Ready to Transform Your Workflow?</h1>
        <p className="text-center">
          Join thousands of professionals who are already using Digitools to
          work smarter. <br /> Start your free trial today.
        </p>
        <div className="space-x-3">
        <button class="btn bg-white">Explore Products</button>
          <button className="btn btn-primary">View Pricing</button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default WorkFlow;
