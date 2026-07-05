import React from 'react'
import {useState} from 'react'
const Counter = () => {
    const [count,setCount]=useState(0);
    const [step,setStep]=useState(1);
    const increment= () => {
        setCount(count + Number(step))
    }
    //  let count=0;
    // //to increment 1
    // const incCount=() =>{
    //     count++
    //     console.log(count)
    // }
    //to increment 5 normally
    // const incrCount=() =>{
    //     count+=5
    //     console.log(count)
    // }
  return (
    <div className='flex flex-col items-center justify-center p-6 bg-gray-50 rounded-2xl mt-10 mx-auto'>
        <h2 className='text-2xl mb-4 font-semibold'>Count {count}</h2>
        <button onClick={increment} 
        className='px-4 py-2 bg-green-500 text-white rounded transition-all cursor-pointer'> ADD </button>
        <input
          type='number'
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          className='mt-4 px-2 py-1 border rounded bg-amber-400'
        />
    </div>
  )
}

export default Counter
        


        /* <button onClick={incCount} className='px-4 py-2 bg-green-500 text-white rounded mb-5'>Add 1</button> */
        /* <button onClick={() => setCount(count+5)} className='px-4 py-2 bg-amber-500 text-white rounded'>ADD</button> */
        /* <button onClick={incrCount} className='px-4 py-2 bg-violet-500 text-white rounded'>Add 5</button> */