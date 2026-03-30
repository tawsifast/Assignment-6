import React, { use, useState } from 'react';
import AvailableProducts from './AvailableProducts/AvailableProducts';
import SelectedProducts from './SelectedProducts/SelectedProducts';

const DigitalTools = ({productPromise, money, setMoney}) => {

    // console.log(productPromise);
    const products = use(productPromise);
    // console.log(products);

    // For toggling 
    const [selectedType, setSelectedType] = useState("products");
    console.log("selectedType", selectedType);

    // For updating cart
    const [cart, setCart] = useState([]);

    return (

    <div>
    <div className='flex flex-col justify-center items-center my-20 space-y-6'>
        <h1 className='font-bold text-3xl'>Premium Digital Tools</h1>
        <p className='text-center'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
        <div className="shadow-md p-1.5 rounded-full">
            <button onClick={()=> setSelectedType("products")}  className={`btn ${selectedType === "products" ? "btn-primary" : ""} rounded-full`}>Products</button>
            <button onClick={()=> setSelectedType("cart")} className={`btn 
            ${selectedType === "cart" ? "btn-primary" : ""} rounded-full`}>
                Cart ({cart.length})</button>
        </div>
    </div>
    {selectedType === "products" ? <AvailableProducts products={products} cart={cart} setCart={setCart} money={money} setMoney={setMoney}></AvailableProducts>: <SelectedProducts money={money} setMoney={setMoney} cart={cart} setCart={setCart}></SelectedProducts> }

    </div>

    );
};

export default DigitalTools;