import React from 'react';
import { Link } from 'react-router-dom'

// Menggunakan Compose component untuk nama link
function NamaLink(props) {
    return <li>{props.name}</li>
}

//  Menggunakan Extracting Component untuk link navigasi
function Navigasi() {
    return (

        <div className="header-right">
            {/* Membuat nama link untuk setiap halaman */}
            <Link to='/'><NamaLink name='Home' /></Link>
            <Link to='/daftar'><NamaLink name='Daftar' /></Link>
            <Link to='/login'><NamaLink name='Login' /></Link>
        </div>

    )
}

function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header-left">
                    <h2>GoCode</h2>
                </div>
                < Navigasi />
            </div>
        </div>
    );
}


export default Header;
