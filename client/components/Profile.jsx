import React from 'react'



const Profile = () => {
  
  return (
    <>
    <h1>Profile</h1>
      <div className='profile-wrapper'>
      <div className='each-profile'>
      <div className='profile-picture'>
          <img src={`https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/200px-Noto_Emoji_KitKat_263a.svg.png`}/>
        <div className='profile-name-plate'>
          <p className='profile-name'>hortense</p>
          <p className='profile-sign'>feeling fabulous</p>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}


export default Profile
