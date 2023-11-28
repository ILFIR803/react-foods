import { Link } from 'react-router-dom'

function Header() {
   return <nav className="light-blue lighten-2">
      <div className="nav-wrapper">
         <a href="/" className="brand-logo">React router</a>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><a href="https://github.com/ILFIR803/react-router">Repo</a></li>
         </ul>
      </div>
   </nav>
}

export { Header };