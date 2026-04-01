import React from 'react';
import bannerimg from "../../assets/banner.png"
import { CiPlay1 } from 'react-icons/ci';
import badgeimg from "../../assets/group5.png"


const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 w-11/12 mx-auto ">
  <div className="hero-content flex flex-col lg:flex-row-reverse justify-between items-center gap-30 ">
    <img
      src={bannerimg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div className='space-y-3 text-center'>
     <div className="badge badge-soft badge-primary p-3 rounded-full">
        <img src={badgeimg} alt="" />
        <p>New: AI-Powered Tools Available</p>
    </div>

      <h1 className="font-bold text-3xl py-2 md:py-6 md:text-6xl">
       Supercharge Your <br /> Digital Workflow
      </h1>
      <p>Access premium AI tools, design assets, templates, and productivity <br />
        software—all in one place. Start creating faster today. <br />Explore Products
      </p>
      <div className='flex justify-center md:items-center gap-4'>
        <button className="btn btn-primary">Explore Products</button>
        <button class="btn btn-outline btn-primary"><CiPlay1 />Watch Demo</button>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;