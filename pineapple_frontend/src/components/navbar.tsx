import React from 'react'
import '../styles/css/navbar.css'
import PineappleLogo from './pineapple.svg'

const Navbar = (): JSX.Element => (
    <nav>
        <ul>
            <h6>
                <img src={PineappleLogo} />
                pineapple
            </h6>
            <li><a href="#">About</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
)

export default Navbar