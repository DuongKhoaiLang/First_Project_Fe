import {Route,Routes} from 'react-router'
import { useState } from 'react' 

import './App.css'
import HomePage from './pages/Home/Home.jsx'
import SourcePage from './pages/Sourse/Sourse.jsx'
import AboutPage from './pages/About/About.jsx'
import Header from './components/layout/header.jsx'
import Event from './pages/Event/Event.jsx'
import SideBar from './components/layout/SideBar.jsx'
import Login from './pages/Login-Register/Login.jsx'
import Register from './pages/Login-Register/Register.jsx'
import axios from 'axios'




function App() {

  const [showSideBar,setShowSideBar] = useState(false)
  const [showLogin,setShowLogin] = useState(false)
  const [showRegister,setShowRegister] = useState(false)

  const handleHeaderBarsClick = () => {
    setShowSideBar(!showSideBar)
  }

  const handleLoginClick = () => {
    setShowLogin(!showLogin)
  }

  const handleRegisterClick = () => {
    setShowRegister(!showRegister)
  }

  return (
    <>
    {showRegister && <Register onClose = {handleRegisterClick}/>}
    {showLogin && <Login onClose = {handleLoginClick} changeToRegister = {handleRegisterClick}/>}
    <div className='font-semibold'>
      <Header SideBarActive = {handleHeaderBarsClick} LoginActive = {handleLoginClick} RegisterActive = {handleRegisterClick}/>
      <div className='flex flex-row'>
        {showSideBar && <SideBar />}
          <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/source' element = {<SourcePage/>}></Route>
            <Route path='/about' element = {<AboutPage/>}></Route>
            <Route path='/event' element = {<Event/>}></Route>
          </Routes>
      </div>
    </div>
    </>
  )
}

export default App
