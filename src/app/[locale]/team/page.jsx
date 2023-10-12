import React from 'react';

import styles from "./team.module.css";

import { getTranslator } from 'next-intl/server';
import { headers } from 'next/headers';

export async function generateMetadata({ params: { locale }}) {
    const t = await getTranslator(locale, 'TEAM.metadata');
    const url = headers().get('X-URL');
    return {
      title: t('title'),
      description: t('description'),
      alternates: {
        canonical: url
      }
    };
}

function Team() {
    return (
        <div>Team</div>
    );
}

export default Team;
