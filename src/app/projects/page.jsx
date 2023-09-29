import React from 'react';

import styles from "./projects.module.css";
import ProjectItem from "@/components/Project_item/ProjectItem";

import I1_p1 from "public/img1_project_1.jpg";
import I2_p1 from "public/img2_project_1.jpg";

function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.items1}>
                <ProjectItem projectName={"test1"} image={I1_p1}/>
                <ProjectItem projectName={"test2"} image={I1_p1}/>
            </div>
            <div className={styles.items2}>
                <ProjectItem projectName={"test3"} image={I2_p1}/>
            </div>
        </div>
    );
}

export default Page;
