import { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setProducts } from './redux/incrementSlice'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'

const router=createBrowserRouter([
  {
    path:"/",
    element: <Header />,
    children:[
      {
        path:"/products",
        element:<Products/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
    ]
  }
]);

function App() {

  const dispatch=useDispatch();

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
      <RouterProvider router={router}>
        <Header />
      </RouterProvider>,
    </div>
  )
}
export default App
