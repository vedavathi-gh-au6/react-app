import React from 'react';
import style from '../css/card.module.css'
const Imagedetail=({image})=>{
   console.log(image)
    return (
        <div className={style.div1}>
           
            <img
                  
                  src={image.url}
                  alt="carousel"
                />
            <h5>{/*image.description*/}</h5>
             
            
        </div>

    )
}

export default Imagedetail;