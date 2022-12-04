import React from 'react'

export default function Navigation() {
        return (
            <div className="navigation">
                <nav className="nav">
                    <ul>
                        <li><a className='active' href="#home">Home</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a>  </li>
                    </ul>
                </nav>
            </div>
        )
    
}