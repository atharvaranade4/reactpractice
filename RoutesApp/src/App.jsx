import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

import CharacterList from './Characters/CharacterList'
import CharacterDetails from './Characters/CharacterDetails'

import PlanetsList from  './Planets/PlanetsList'

function App() {
  return (
    <>
    {/* <p>Navbar</p> */}
    <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/characters/" element={ <CharacterList/> } />
      <Route path="/characters/:charId" element={ <CharacterDetails/> } />
      <Route path="/planets/" element={ <PlanetsList/> } />
    </Routes>
    </>
  )
}
 

export default App
