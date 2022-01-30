import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'><h1>Cooking Heros</h1></Link>
            <Link to='/create'>Create Recipes</Link>
        </nav>
    </div>
  )
}

export default Navbar;
