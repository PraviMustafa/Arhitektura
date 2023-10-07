import React from 'react';
import Link from "next/link";
import styles from './logo.module.css';

import {Roboto} from 'next/font/google'

const roboto = Roboto({
    weight: ['300'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

function Logo() {
    return (
        <div className={roboto.className}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <b className={styles.letter}>I</b>arhitektura
                </Link>
            </div>
        </div>
    );
}

export default Logo;
