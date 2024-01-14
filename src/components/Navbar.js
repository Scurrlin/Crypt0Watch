import React from 'react'
import {FaCoins} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>
                <FaCoins className='icon' />
                <h1> Crypt<span className='blue'>0</span>Watch</h1>
            </div>
            <div className='subheading'>
                <h1>Top 50</h1>
            </div>
        </Link>
    )
}

export default Navbar