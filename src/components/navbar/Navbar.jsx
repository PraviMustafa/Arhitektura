import React from 'react';
import Link from 'next/link';
import styles from "./navbar.module.css";

import {Roboto} from 'next/font/google';

import { useTranslations } from 'next-intl';

const roboto = Roboto({
    weight: ['500'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

function Navbar() {
    const t = useTranslations('NAVBAR');

    const links = [
        {
            id: 1,
            title: `${t('team')}`,
            url: "/team",
        },
        {
            id: 2,
            title: `${t('projects')}`,
            url: "/projects",
        },
        {
            id: 3,
            title: `${t('contacts')}`,
            url: "/contacts",
        },
    ];

    return (
        <div className={roboto.className}>
            <div className={styles.container}>
                <div className={styles.links}>
                    {links.map((link) => (
                        <Link key={link.id} href={link.url} className={styles.link}>
                            {link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
