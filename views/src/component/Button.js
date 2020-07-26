import React from 'react';
import '../css/Button.css';
const Button=({value,type,background}) =>(
      
            <input type={type} style ={{background}} className="button" value={value}/>
)
    


export default Button