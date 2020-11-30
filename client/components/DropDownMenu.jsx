import React from 'react'


const DropDownMenu = () => {
  return (

    <div className= 'drop-down-menu'>
      <h1>drop-down-menu</h1>
        <select value="sign" type="text" >
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button type="submit">Submit</button>
        
    </div>
  )
}

export default DropDownMenu
