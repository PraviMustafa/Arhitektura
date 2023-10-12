'use client'

import styles from './languagePicker.module.css';
import { useRef } from 'react';

import { Link, usePathname } from '@/i18n/i18n';
import { LANG_SR, LANG_EN } from '@constants';

import Image from 'next/image';

// flags
import srFlag from '../../../public/flags/sr.png';
import enFlag from '../../../public/flags/en.png';

const flags = {
  [LANG_SR]: srFlag,
  [LANG_EN]: enFlag
}

const LanguagePicker = ({ activeLanguage }) => {
  const pickerRef = useRef();
  const path = usePathname();

  return (
    <div className={styles.container} onClick={() => pickerRef.current.classList.toggle(styles.show)}>
      <Image src={flags[activeLanguage]} alt=''></Image>
      <div className={`flex mt-3 ${styles.inactiveLanguages}`} ref={pickerRef} onClick={(ev) => ev.stopPropagation()}>
        { Object.keys(flags).map(key => key !== activeLanguage && 
          <Link href={path} locale={key} key={key}>
            <Image src={flags[key]} alt=''></Image>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LanguagePicker;
