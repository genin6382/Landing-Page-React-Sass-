import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <>
          <nav className='navbar'>
            <h2>WebDesign</h2>
            <ul className='navbar-menu'>
              <li className='navbar-menu-item'><Link to="/">Home</Link></li>
              <li className='navbar-menu-item'><Link to="/about">About</Link></li>
              <li className='navbar-menu-item'><Link to="/roadmap">Roadmap</Link></li>
              <li className='navbar-menu-item'><Link to="/contact" className='btn btn-primary'>Contact</Link></li>
            </ul>
          </nav>
        </>
    )
}