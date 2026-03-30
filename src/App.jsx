
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import BottomBanner from './components/BottomBanner/BottomBanner'
import DigitalTools from './components/DigitalTools/DigitalTools'
import Navbar from './components/Navbar/Navbar'

const fetchProducts = async() => {
  const res = fetch("/data.json");
   return (await res).json();
}

function App() {
  
const productPromise = fetchProducts();

 const [money, setMoney] = useState(0);

  return (
    <>
     <Navbar></Navbar>
     <Banner></Banner>
     <BottomBanner></BottomBanner>
     <Suspense fallback={<span className="loading loading-ring loading-xl"></span>}>

     <DigitalTools productPromise={productPromise} money={money} setMoney={setMoney}></DigitalTools>

     </Suspense>
    </>
  )
}

export default App
