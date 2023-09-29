import React from 'react';
import styles from "./footer.module.css";
import Image from "next/image";

import {Facebook} from "@mui/icons-material";
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
    return (
        <div className={styles.container}>
            <span className={styles.footer_text}>IArhitektura</span>
            <span className={styles.footer_text}>0690000000</span>
            <span className={styles.footer_text}>igorarh@gmail.com</span>
            <div className={styles.social}>
                <Facebook className={styles.icons}/>
                <InstagramIcon className={styles.icons}/>
            </div>
        </div>
    );
}

export default Footer;
