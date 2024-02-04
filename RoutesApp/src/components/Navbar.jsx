import { Link } from 'react-router-dom'

export default function Navbar () {
  return (
    <>
      <Link to='/'>
          StarWarsAPI
      </Link>
      <Link to='/characters'>
          People
      </Link>
      <Link to='/planets'>
          Planets
      </Link>
    </>
  )
}