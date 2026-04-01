import React from 'react';
import Card from '../../ui/Card';


const AvailableProducts = ({products, cart, setCart, setMoney, money}) => {
    console.log(products);
    return (
    <div>
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch'>
    {
        products.map((product) => {
        console.log(product);
        return(
        <Card product={product} cart={cart} setCart={setCart} money={money} setMoney={setMoney}></Card>
        
    )
})}
        </div>
    </div>
    );
};

export default AvailableProducts;