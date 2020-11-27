import React from 'react'


const DropDownMenu = () => {
  return (
    <div>
   
    <h1>DropDownMenu</h1>
        <select  className='input' value="sign" type="text" >
            <option value="">Select</option>
            <option value="Aries">Aries</option>
            <option value="Cancer">Cancer</option>
            <option value="Leo">Leo</option>
            <option value="Pisces">Pisces</option>
            <option value="Gemini">Gemini</option>
            <option value="Sagittarius">Sagittarius</option>
            <option value="Virgo">Virgo</option>
            <option value="Taurus">Taurus</option>
            <option value="Libra">Libra</option>
            <option value="Capricorn">Capricorn</option>
            <option value="Scorpio">Scorpio</option>
            <option value="Aquarius">Aquarius</option>
          </select>
    </div>
  )
}

export default DropDownMenu
