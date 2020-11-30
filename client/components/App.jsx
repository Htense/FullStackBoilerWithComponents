import React from 'react'



import Header from './Header.jsx'
import NavVertical from './NavVertical.jsx'
import NavHorizontal from './NavHorizontal.jsx'
import DropDownMenu from './DropDownMenu.jsx'
import Form from './Form.jsx'
import Polaroid from './Polaroid.jsx'
import Profile from './Profile.jsx'
import TitleOnPicture from './TitleOnPicture.jsx'
import Register from './Register.jsx'
import LogIn from './LogIn.jsx'

// import NewComponent from './NewComponent.jsx'
// import NewComponent from './NewComponent.jsx'
import SearchBar from './SearchBar.jsx'
import Footer from './Footer.jsx'



class App extends React.Component {
    render () {
      return (
        <>
          <Header/>
          <NavHorizontal/>
          <NavVertical/>
          <DropDownMenu/>
          <Polaroid/>
          <TitleOnPicture/>
          <Profile/>
          <SearchBar/>
          <Form/>
          <Register/>
          <LogIn/>
          
          <Footer/>
        </>
      )
    }
  }

export default App
