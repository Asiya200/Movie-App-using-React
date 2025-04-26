import {Link} from 'react-router-dom'
import '../CSS/Navbar.css'

function NavBar() {
  return (
    <nav className='navbar'>
      <div className='nav'>
        <Link to='/'>Movie App</Link>
      </div>
      <div className='nav-links'>
        <Link to="/" className='nav-link'>Home</Link>
        <Link to='/fav' className='nav-link'>Fav</Link>
      </div>
    </nav>
  )
}

export default NavBar
