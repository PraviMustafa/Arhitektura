import React from 'react';
import styles from "@/components/description/description.module.css";

function Description({day, month, year, status, project, city, country}) {
    return (
        <div className={styles.list}>
            <p>{day} {month} {year}</p>
            <h1>{status}</h1>
            <h2>{project}, {city}, {country}</h2>
        </div>
    );
}

export default Description;
