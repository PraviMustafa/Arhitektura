import React from 'react';
import Link from "next/link";
import styles from "./navbar.module.css";

import {Roboto} from 'next/font/google'

const roboto = Roboto({
    weight: ['500'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

const links = [
    {
        id: 1,
        title: "Team",
        url: "/team",
    },
    {
        id: 2,
        title: "Projects",
        url: "/projects",
    },
    {
        id: 3,
        title: "Contacts",
        url: "/contacts",
    },
];

function Navbar() {
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
