import React, { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import axios from "axios";
import style from './../css/card.module.css';
import Imagedetail from '../component/Imagedetail'

const ImageCarousel = () => {
  const [images, setImages] = useState(null);

  useEffect(() => {
    getImage();
  }, []);

  const getImage = async () => {
    try {
      let { data } = await axios.get("/api/images");
      setImages(data.images);
    } catch (error) {
      console.error(error);
    }
  };
  /*
  return (
      <section>{images.map((image) =>(
      <Imagedetail key={image._id} image={image} ></Imagedetail>
        ))}
        </section>
      )};
  */
  return (
    <div className={style.cards}>
      {images
        ? images.map((image) => {
            return (
              <Imagedetail key={image._id}
                image={image}
                /> );
          })
        : null}
    </div>
  );
};



export default ImageCarousel;


