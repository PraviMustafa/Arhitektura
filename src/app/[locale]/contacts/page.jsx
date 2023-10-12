import React from 'react';

import styles from "./contacts.module.css";

import { getTranslator } from 'next-intl/server';
import { headers } from 'next/headers';

export async function generateMetadata({ params: { locale }}) {
    const t = await getTranslator(locale, 'CONTACTS.metadata');
    const url = headers().get('X-URL');
    return {
      title: t('title'),
      description: t('description'),
      alternates: {
        canonical: url
      }
    };
}

function Contacts() {
    return (
        <div className={styles.container}>
            Contacts
        </div>
    );
}

export default Contacts;
