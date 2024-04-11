import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
      <nav className="navbar">
        <h2>Logo</h2>
        <ul>
          <li>
            <a>
              Accueil
            </a>
          </li>
          <li>
            <a>
            Vehicule
            </a>
          </li>
          <li>
            <a>
            Info traffic
            </a>
          </li>
          <li>
            <a>
            Votre voyage
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar
