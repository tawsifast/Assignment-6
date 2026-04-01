// import React, { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { FaFileAlt, FaRobot, FaGlobe, FaTasks, FaLinkedin, FaUserTie, FaBriefcase, 
FaChartBar } from "react-icons/fa";
import { toast } from 'react-toastify';

// const iconMap = {FaFileAlt,FaRobot,FaGlobe,FaTasks,FaLinkedin,FaUserTie, FaBriefcase, FaChartBar };



const Card = ({product, cart, setCart, money, setMoney}) => {
    
const selected = cart.some(item => item.id == product.id);

// const [isSelected, setisSelected] = useState(false);


const handleChoosePlayer = () =>{
    toast.success("added successfully")
    if (selected === true) {
        return;
    }
    setCart([...cart, product])
    // setisSelected(true);
    setMoney(money + product.price)
}

    // const Icon = iconMap[product.icon];
    return (
        <div>
            <div className="card bg-base-100 h-full shadow-sm ">
  <div className="card-body flex flex-col h-full">
    <div className='flex justify-between items-center mb-5'>
         {/* {Icon && <Icon className="text-gray-400" />} */}
         <img src={product.img} alt="" />
        <span className="badge badge-xs badge-warning">{product.tag}</span>
    </div>
    <div className="space-y-3">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <span className="text-xl font-bold">${product.price}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs grow">
        {
            (product.features).map((feature, ind) => <li key={ind}  className='flex items-center gap-2 text-[14px]'><FcCheckmark /> {feature}</li>)
        }
    </ul>
    <div className="mt-6">

      {/* <button onClick={()=>{ setisSelected(true); handleChoosePlayer(); setMoney(10)}} className={`btn ${isSelected === true ? "btn-success" : "btn-primary"} btn-primary btn-block`}>{isSelected === true ? "Added to cart" : "Buy Now"}</button> */}

      <button onClick={handleChoosePlayer} className={`btn ${selected === true ? "btn-success" : "btn-primary"} btn-block`}>{selected === true ? "Added to cart" : "Buy Now"}</button>
        </div>
    </div>
            </div>
    </div>
    );
};

export default Card;