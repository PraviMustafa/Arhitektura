import React from 'react';
import styles from "@/components/project_image/projectimage.module.css";
import Image from "next/image";

function ProjectImage({image}) {

    return (
        <div className={styles.imageWrap}>
            <Image
                className={styles.image}
                src={image}
                alt={""}/>
        </div>
    );
}

export default ProjectImage;
