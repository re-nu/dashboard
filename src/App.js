
import { useState,useEffect } from 'react';
import './App.css';
import { Products } from './Products';
import AppBar from '@mui/material/AppBar';



function App() {
  const [products,setProducts]=useState([]);
  async function getData() {
    const data= await fetch("https://6166c4e513aa1d00170a6713.mockapi.io/products");
    const prd=await data.json();
    console.log(prd);
    setProducts(prd);
    console.log("setproducts",products);
  }

  useEffect(getData,[]);
  return (
    <div className="App">
      <Products/>
    </div>
  );
}

export default App;

