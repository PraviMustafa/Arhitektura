import styles from './page.module.css'

import Projects from '@projects';
import { ImageSlideShow } from '@components/client';
import { Recent } from '@components/server';

import { getTranslator } from 'next-intl/server';
import { headers } from 'next/headers';

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

export async function generateMetadata({ params: { locale }}) {
  const t = await getTranslator(locale, 'HOME_PAGE.metadata');
  const url = headers().get('X-URL');
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: url
    }
  };
}

export default async function Home({ params: { locale }}) {
  const projects = Projects.getLocalizedProjects(locale);
    return (
        <>
            <section className='full-screen'>
                <ImageSlideShow images={images} />
            </section>

            <section>
                { projects.map((project, index) => 
                    <Recent key={project.id} project={project} isReverse={ index % 2 === 0 ? false : true }></Recent>
                )}
            </section>
        </>
    )
}
