"use client"

// components/ImageSlideshow.js
import { useState, useEffect } from 'react';
import styles from './ImageSlideShow.module.css';
import Image from "next/image"; // Import your CSS module

const ImageSlideShow = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Change slide every 3 seconds (adjust as needed)

        return () => clearInterval(interval);
    }, [currentImage, images.length]);

    return (
        <div className={styles.slideshow}>
            {images.map((image, index) => (
                <Image
                    key={index}
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
                />
            ))}
        </div>
    );
};

export default ImageSlideShow;
