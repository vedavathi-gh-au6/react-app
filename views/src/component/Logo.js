import React from 'react'
import  '../css/Logo.css';
const Logo=({logoUrl})=> {
    return (
        <div className='Logo'>
            <img src={logoUrl} 
            style={{width:"50px",height:"50px"}} alt="logo"/>
        </div>
    )
}

export default Logo