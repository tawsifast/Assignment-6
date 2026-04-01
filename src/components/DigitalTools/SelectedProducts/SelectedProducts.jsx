
import { toast } from "react-toastify";
import noItemImg from "../../../assets/shopping-cart.png"

const SelectedProducts = ({ cart, setCart, setMoney, money}) => {
  console.log("cart", cart);

 
//   setMoney()
const clearingCart = () => {
    toast.info("Product sent for checkout")
    setCart([]);
}

  const handleDelete = (product)=>{
    console.log("Product", product);
    const filteredProduct = cart.filter((selectProduct) => 
    selectProduct.name !== product.name);
    setCart(filteredProduct);
    toast.error("Product removed")
    setMoney(money - product.price)
    
  }
  return (
    <div className="shadow-md p-3 w-10/12 mx-auto mb-5">
      {cart.length === 0 ? 
      <div className="flex flex-col p-8 justify-center items-center  opacity-50">
        <img src={noItemImg} alt="cartImg" className="w-25"/>
        <p className="text-xl">Your cart is empty</p>
      </div> 
      
      : cart.map((product) => {
        return <div key={product.id}>
            <div className="w-9/12 mx-auto space-y-3 p-0 md:p-8 mb-5">
                <h1 className="font-bold text-2xl mb-5">Your Cart</h1>
            <div className="flex justify-between">
                <div className="flex items-center justify-center gap-5">
                    <img src={product.img} alt="" />
                    <div>
                        <h1 className="font-semibold mb-2">{product.name}</h1>
                        <p className="font-semibold">${product.price}</p>
                    </div>
                </div>
                <button onClick={() => handleDelete(product)} className="btn text-red-800">Remove</button>
                </div>
                
               
                </div>
        </div>;
        
      })}
     {cart.length === 0 ? "" : <div>
        <div className="w-8/12 mx-auto flex justify-between mb-10">
            <p className="font-semibold">Total</p>
            <span className="font-semibold">${money}</span>
        </div>
      <div className="w-9/12 mx-auto mb-10">
        <button onClick={clearingCart} className="mx-auto btn btn-primary w-full rounded-full">Proceed to Checkout</button>
      </div>
      </div>}
      
      
    </div>
  );
};

export default SelectedProducts;
