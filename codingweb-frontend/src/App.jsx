import {Route,Routes} from 'react-router'

import './App.css'
import HomePage from './pages/Home/Home.jsx'
import SourcePage from './pages/Sourse/Sourse.jsx'
import AboutPage from './pages/About/About.jsx'
import Header from './components/layout/header.jsx'
import Event from './pages/Event/Event.jsx'


function App() {
  return (
    <>
      <Header />

      <Routes>
          <Route path='/' element = {<HomePage/>}></Route>
          <Route path='/Source' element = {<SourcePage/>}></Route>
          <Route path='/About' element = {<AboutPage/>}></Route>
          <Route path='/Event' element = {<Event/>}></Route>
      </Routes>
    </>

  )
}

export default App
