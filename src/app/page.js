import Image from 'next/image'
import styles from './page.module.css'

import ImageSlideShow from "@/components/image_slide_show/ImageSlideShow";

//hero section images
import Hero from "public/hero.jpg";

//first current project images
import I1_p1 from "public/img1_project_1.jpg"
import I2_p1 from "public/img2_project_1.jpg"

import Recent from "@/components/recent_projects/Recent";
import Recent_reverse from "@/components/recent_projects_reverse/Recent_reverse";

const images = [
    Hero,
    I1_p1,
    I2_p1,
    // Add more image paths as needed
];

export default function Home({}) {

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.imageWrap}>
                    <ImageSlideShow images={images} />
                </div>
            </section>

            <section>
                <Recent
                    day={9}
                    month={"mart"}
                    year={2023}
                    status={"Completion"}
                    project={"skyline"}
                    city={"Belgrade"}
                    country={"Serbia"}

                    img_hero={Hero}
                    img1_project1={I1_p1}
                    img2_project1={I2_p1}
                    />

                <Recent_reverse
                    day={9}
                    month={"mart"}
                    year={2023}
                    status={"Completion"}
                    project={"skyline"}
                    city={"Belgrade"}
                    country={"Serbia"}

                    img_hero={Hero}
                    img1_project1={I1_p1}
                />

                <Recent
                    day={9}
                    month={"mart"}
                    year={2023}
                    status={"Completion"}
                    project={"skyline"}
                    city={"Belgrade"}
                    country={"Serbia"}

                    img_hero={Hero}
                    img1_project1={I1_p1}
                    img2_project1={I2_p1}
                    />

                <Recent_reverse
                    day={9}
                    month={"mart"}
                    year={2023}
                    status={"Completion"}
                    project={"skyline"}
                    city={"Belgrade"}
                    country={"Serbia"}

                    img_hero={Hero}
                    img1_project1={I1_p1}
                />
            </section>
        </div>
    )
}
