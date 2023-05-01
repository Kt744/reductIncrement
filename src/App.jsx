import { createContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Products from './components/Products'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/incrementSlice'
// import './App.css'

export const myContext=createContext([])

function App() {

  const dispatch=useDispatch();

  const [items,setItems]=useState([])

  useEffect(()=>{
    axios.get('https://dummyjson.com/products')
    .then(res=> {
      let _products=res.data.products
      _products.forEach(element => {
        element.quantity=0
      });
      dispatch(setProducts(_products))      
    })   
  },[])

  return (
    <div>
    <myContext.Provider value={items}>
      <Header />
    </myContext.Provider>
    <Products item={items} setItem={setItems} />
    </div>
  )
}
export default App
