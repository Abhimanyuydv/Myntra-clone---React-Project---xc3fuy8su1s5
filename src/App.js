import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Home from './Component/Home';
import Footer from './Component/Footer';
import {Route,Routes,Link} from "react-router-dom";
import Product from './Component/Product';

function App() {
  return (
    <div className="App">
      <Header/>
    
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
