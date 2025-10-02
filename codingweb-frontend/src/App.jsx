import {Route,Routes} from 'react-router'
import { useState } from 'react' 

import './App.css'
import HomePage from './pages/Home/Home.jsx'
import SourcePage from './pages/Sourse/Sourse.jsx'
import AboutPage from './pages/About/About.jsx'
import Header from './components/layout/header.jsx'
import Event from './pages/Event/Event.jsx'
import SideBar from './components/layout/SideBar.jsx'


fetch("http://localhost:8080/cac/359aa216-47f3-47fa-bdc9-2c0c9fe3719e").then(pre => (pre.json())).then(repons => {console.log(repons);
})

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
