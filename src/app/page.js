import styles from './page.module.css'

import { ImageSlideShow } from '@components/client';
import { Recent } from '@components/server';

import projects from '@projects';

//hero section images
import Hero from "public/hero.jpg";

//first current project images
import I1_p1 from "public/img1_project_1.jpg"
import I2_p1 from "public/img2_project_1.jpg"

const images = [
    Hero,
    I1_p1,
    I2_p1,
    // Add more image paths as needed
];

export default function Home({}) {

    return (
        <div className={styles.container}>
            <section className='full-screen'>
                <ImageSlideShow images={images} />
            </section>

            <section>
                { projects.map((project, index) => 
                    <Recent key={project.id} project={project} isReverse={ index % 2 === 0 ? false : true }></Recent>
                )}
            </section>
        </div>
    )
}
