import React from 'react';
import Logo from './Logo';
import Button from './Button';
import Login from './Login';
import '../css/NavBar.css';
import Upload from "./Upload";
import Register from './Register'; 

const NavBar = () =>{
    return (
        <nav className="NavBar">
           <Logo logoUrl ={`https://tse4.mm.bing.net/th?id=OIP.cnixmJxOoLuzOcGPq-lK-QHaEK&pid=Api&P=0&w=363&h=205`} />
           <Upload />
           <Register />
           <Login />
        </nav>
    )
}

export default NavBar;