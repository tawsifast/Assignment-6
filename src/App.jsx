
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import BottomBanner from './components/BottomBanner/BottomBanner'
import DigitalTools from './components/DigitalTools/DigitalTools'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify'
import GetStarted from './components/GetStarted/GetStarted'
import TransparentPricing from './components/TransparentPricing/TransparentPricing'
import WorkFlow from './components/Workflow/WorkFlow'
import Footer from './components/Footer/Footer'

const fetchProducts = async() => {
  const res = fetch("/data.json");
   return (await res).json();
}

function App() {
  
const productPromise = fetchProducts();

 const [cart, setCart] = useState([]);

 const [money, setMoney] = useState(0);

  return (
    <>
     <Navbar cart={cart} setCart={setCart}></Navbar>
     <Banner></Banner>
     <BottomBanner></BottomBanner>
     <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

     <DigitalTools productPromise={productPromise} money={money} setMoney={setMoney} cart={cart} setCart={setCart}></DigitalTools>

     </Suspense>

     <GetStarted></GetStarted>
     <TransparentPricing></TransparentPricing>
     <WorkFlow></WorkFlow>
     <Footer></Footer>
     <ToastContainer />
    </>
  )
}

export default App
