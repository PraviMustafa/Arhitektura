import React from 'react';
import styles from "./project_item.module.css";
import Image from "next/image";

function ProjectItem({ image, projectName }) {
    return (
        <div className={styles.container}>
            <div className={styles.imageWrap}>
                <Image className={styles.image} src={image} alt={""} />
                <h2 className={styles.projectTitle}>{projectName}</h2>
            </div>
        </div>
    );
}

export default ProjectItem;
