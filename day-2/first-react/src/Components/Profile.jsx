import React from 'react'
import '../style/Profile.css'
export const Greeting = () => {
    const hours=new Date().getHours();
    
    if(hours<12){
       return ("good morning")
     }
    else if(hours>12){
       return ("good evening")
    }
    else{
       return ("Good night")
    }
}
const Profile = () => {
  let name="Ashitha"
  return (
    <div className='profile-card'>
        <h4>{Greeting()} {name}</h4>
        <h2 className='name-text'>Welcome {name}</h2>
        <p>The is our first functional component</p>
    </div>
  )
}

export default Profile

