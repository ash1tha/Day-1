import React from 'react'
import Profile  from './Components/Profile'
import {Greeting} from './Components/Profile'
import Counter from './Components/Counter'
import { motion } from 'framer-motion'

const App = () => { 
  const handleClick=() =>{
    console.log("you clicked the button!")
  }
  <br />
  const createSum=() =>{
    console.log(2+3)
  }
  const sayHello=() =>{
    alert("HELLO!!")
  }
  return (
    <>
      {/* <h1>welcome to react</h1>  
      <p>HELLO!!!</p>     */}
      <Profile/>
      <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-5xl font-extrabold
                    bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
                    bg-clip-text text-transparent
                    bg-size-[300%_300%]
                    animate-gradient">Tailwind Sample Code
      </motion.h1>
       <div className='flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl mt-10 mx-auto'>
          <button onClick={handleClick} className='px-4 py-2 bg-purple-500 text-white rounded mb-5 transition-all cursor-pointer'>Click me</button>
          <button onClick={sayHello} className='px-4 py-2 bg-pink-500 text-white rounded mb-5 transition-all cursor-pointer'>Say Hello</button>
          <button onClick={createSum} className='px-4 py-2 bg-blue-500 text-white rounded transition-all cursor-pointer'>Sum</button>
       </div>
      <Counter/>
    </>
  )
}

export default App
