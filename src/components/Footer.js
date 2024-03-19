import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

export function Footer() {
    return (
        <div className='row p-5 mt-5 border-top'>
        <div className='col text-center'>
            <NavLink className="text-decoration-none mx-2" to="/aboutus">About Us</NavLink>
            <NavLink className="text-decoration-none mx-2" to="/terms">Terms & Conditions</NavLink>
            <a className="text-decoration-none mx-2" href='#'>Instagram</a>
            <a className="text-decoration-none mx-2" href='#'>X</a>
            <NavLink className="text-decoration-none mx-2" to="/contact">Contact</NavLink>
        </div>
    </div>
    )
}
