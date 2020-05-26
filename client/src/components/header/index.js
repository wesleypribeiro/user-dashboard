import React from 'react';
import './styles.css';
import { FaUserCircle } from 'react-icons/fa'

export default function Header() {
    return (
        <div className='header'>
            <p>header</p>
            <div className="header-user">
            <p>logout </p>
            <FaUserCircle color='white' size='40px' />
            </div>
        </div>
    )
}