import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import { Route, Routes, Link } from "react-router-dom";
import Product from './Component/Product';
import { useEffect, useState } from "react";


function App() {
  const [data, setdata] = useState([]);
  const [tempData,setTempData]=useState([""])
 useEffect(() => {
   fetch("https://fakestoreapi.com/products")
   .then((data)=>data.json())
   .then((res)=>{
     setdata(res);
     setTempData(res)

      });
   },[]);
  return (
    <div className="App">
      <Header data={data} setTempData={setTempData}/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product tempData={tempData} />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
