import React from 'react'



import Header from './Header.jsx'
import NavVertical from './NavVertical.jsx'
import NavHorizonal from './NavHorizonal.jsx'
import DropDownMenu from './DropDownMenu.jsx'
import Form from './Form.jsx'
import Polaroid from './Polaroid.jsx'
import Profile from './Profile.jsx'
import TitleOnPicture from './TitleOnPicture.jsx'
import Register from './Register.jsx'
import LogIn from './LogIn.jsx'
import BigButtons from './BigButtons.jsx'
// import NewComponent from './NewComponent.jsx'
// import NewComponent from './NewComponent.jsx'
import SearchBar from './SearchBar.jsx'
import Footer from './Footer.jsx'



class App extends React.Component {
    render () {
      return (
        <>
          <Header/>
          <NavVertical/>
          <NavHorizonal/>
          <DropDownMenu/>
          <Form/>
          <Register/>
          <LogIn/>
          <Polaroid/>
          <BigButtons/>
          <Profile/>
          <SearchBar/>
          <TitleOnPicture/>
          
          <Footer/>
        </>
      )
    }
  }

export default App
