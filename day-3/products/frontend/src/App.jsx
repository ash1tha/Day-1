import React from 'react'
import Home from './pages/Home'
import Product from './components/product'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AddProduct from './components/AddProduct'
//for client side routing
import { BrowserRouter,Routes,Route,NavLink } from 'react-router-dom'

const App = () => {
  return (
    <>
      <BrowserRouter>
         <Navbar/>
         <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/products' element={<Products/>} />
           <Route path='/addproduct' element={<AddProduct/>} />
         </Routes>
         <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
