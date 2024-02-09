import React, { useEffect, useState } from 'react';
import axios from "axios";
import ImageCard from './ImageCard';

function Home() {
    const[images, setImages] = useState([]);
    useEffect(()=> {
        axios.get("https://api.slingacademy.com/v1/sample-data/photos?limmit=20")
        .then(response => {
            console.log(response.data.photos);
            setImages(response.data.photos)
        })
        .catch(error => {
            console.error("Something went wrong", error);
        });
    }, []);
  return (
    <div className='grid place-items-center '>
        <h1 className='text-white text-4xl text-center py-4'>React Image Gallery</h1>
        <div className='grid grid-cols-4 gap-4 px-4 bg-white py-4'>
            {images?.map((image, index)=>{
                return <ImageCard imageUrl={image.url} id={image.id} key={index} />
            })}
        </div>
    
    </div>
  )
}

export default Home