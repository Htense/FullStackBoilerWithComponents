import React from 'react'


const LogIn = () => {
  return (
    <div>
   
    <h1>LogIn</h1>
    <form className='form'>

<label className='btn' htmlFor="sign">Username: </label>
<input className='input' name="sign" type="text"/>
<br/>

<label className='btn' htmlFor="sign">Password: </label>
<input className='input' name="sign" type="password"/>
<br/>
<button className='text-btn' type="submit"> Submit </button>
</form>
    </div>
  )
}

export default LogIn
