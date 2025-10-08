import {Route,Routes} from 'react-router'
import { useState } from 'react' 

import './App.css'
import HomePage from './pages/Home/Home.jsx'
import SourcePage from './pages/Sourse/Sourse.jsx'
import AboutPage from './pages/About/About.jsx'
import Header from './components/layout/header.jsx'
import Event from './pages/Event/Event.jsx'
import SideBar from './components/layout/SideBar.jsx'
import axios from 'axios'


axios.get("http://localhost:8080/source")
      .then((data) => {
        console.log(data);
      })

// axios.delete("http://localhost:8080/source/a946ea60-740a-4f75-ba84-fce8603683e9")



function App() {

  const [showSideBar,setShowSideBar] = useState(false)

  const handleHeaderBarsClick = () => {
    setShowSideBar(!showSideBar)
  }

  

  return (
    <div className='font-semibold'>
      <Header SideBarActive = {handleHeaderBarsClick}/>
      <div className='flex flex-row'>
        {showSideBar && <SideBar />}
          <Routes>
            <Route path='/' element = {<HomePage/>}></Route>
            <Route path='/Source' element = {<SourcePage/>}></Route>
            <Route path='/About' element = {<AboutPage/>}></Route>
            <Route path='/Event' element = {<Event/>}></Route>
          </Routes>
      </div>
    </div>

  )
}

export default App
