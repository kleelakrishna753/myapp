import React from 'react'
import {Link} from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div>
        <p>
            <ul>
                <li>
                    <Link to="/content">Home</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/signup">Signup</Link>
                </li>
                <li>
                    <Link to="/admin">Admin</Link>
                </li>           
            </ul>
        </p>
    </div>

  )
}
