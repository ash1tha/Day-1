import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

const Products = () => {
  const apiUrl="https://fakestoreapi.com/products"
  
  useEffect(() =>{
     const fetchData = async() =>{
      try{
          const response = await axios.get(apiUrl)
          console.log(response)
      }catch(error){
          console.log(error)
      }
     }
     fetchData()
  },[]) 

  return (
    <div>
      Products
    </div>
  )
}

export default Products
