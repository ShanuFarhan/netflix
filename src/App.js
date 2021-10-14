import React from 'react'
import NavBar from './components/NavBar/NavBar'
import "./App.css";
import {action,originals} from './components/urls'
import Banner from './components/Banner/Banner';
import Rawpost from './components/RawPost/Rawpost';
function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Rawpost url={action} title='Netflix Originals'/>
      <Rawpost url={originals} title='Action' isSmall/>
    </div>
  )
}

export default App
