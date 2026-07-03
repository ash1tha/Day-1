import React from 'react'
import '../style/Profile.css'
const Profile = () => {
  let name="Ashitha"
  return (
    <div className='profile-card'>
        <h2 className='name-text'>Welcome {name}</h2>
        <p>The is our first functional component</p>
    </div>
  )
}

export default Profile
