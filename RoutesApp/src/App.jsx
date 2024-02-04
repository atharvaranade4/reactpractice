import './App.css'
import Home from './Home'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

import CharacterList from './Characters/CharacterList'
import CharacterDetails from './Characters/CharacterDetails'

import PlanetsList from  './Planets/PlanetsList'

function App() {
  return (
      <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/" element={<CharacterList />} />
          <Route path="/characters/:charId" element={<CharacterDetails />} />
          <Route path="/planets/" element={<PlanetsList />} />
        </Routes>
      </>
  )
}
 

export default App
