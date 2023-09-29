import React from 'react';
import ProjectImage from "@/components/project_image/ProjectImage";

import styles from "./recent_reverse.module.css";
import Description from "@/components/description/Description";

function Recent({day, month, year, status, project, city, country, img_hero, img1_project1}) {
    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <Description day={day} month={month} year={year} status={status} project={project} city={city} country={country}/>
            </div>
            <div className={styles.items}>
                <div>
                    <ProjectImage image={img_hero}/>
                    <ProjectImage image={img1_project1}/>
                </div>
            </div>
        </div>
    );
}

export default Recent;
