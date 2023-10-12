import React from 'react';
import styles from "./recent.module.css";
import Image from "next/image";

function Recent({ project, isReverse }) {
    const { name, country, city, date, status, images, isImportant } = project;
    return (
        isImportant && 
        <div className={styles.container + ' cursor-pointer flex' + (isReverse ? ' flex-row-reverse' : '')}>
            <div className={styles.descriptionWrap}>
                <div>
                    <p>{date}</p>
                    <h1>{status}</h1>
                    <h2>{name}, {city}, {country}</h2>
                </div>
            </div>
            <div className={styles.imagesWrap}>
                { images.map((imageSrc, i) => 
                    /* Ovaj Image se drugacije ponasa ako dobije putanju src={'../public...' }
                    onda trazi width i height (posle pregazi css)
                    Ako uradimo import Hero from '../public...' na vrhu fajla
                    pa onda src={Hero} onda ne trazi, valjda sam detektuje */
                    // nije najbolje da je key = i ali manje bitno sad
                    <Image
                        key={i}
                        src={imageSrc}
                        alt={""}
                        width={1000}
                        height={1000}
                    />
                )}
            </div>
        </div>
    );
}

export default Recent;
