import React from 'react';

const DigitalTools = () => {
    return (
    <div>
    <div className='flex flex-col justify-center items-center my-20 space-y-6'>
        <h1 className='font-bold text-3xl'>Premium Digital Tools</h1>
        <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        <div>
            <button className='btn btn-primary rounded-full'>Products</button>
            <button className='btn rounded-full'>Cart (2)</button>
        </div>
    </div>
    </div>
    );
};

export default DigitalTools;