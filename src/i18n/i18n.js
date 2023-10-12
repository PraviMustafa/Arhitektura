import { getRequestConfig } from 'next-intl/server';
import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { LANG_SR, LANG_EN } from '@constants';

export default getRequestConfig(async ({locale}) => ({
  messages: (await import(`./translations/${locale}.json`)).default
}));

// TODO: Implement 404 page for non existant locale, maybe can be done with route handler on GET req.
export const i18nConfig = {
  locales: [LANG_SR, LANG_EN],
  defaultLocale: LANG_SR,
  // localeDetection: false,
  // able to access 404 for non existant locale (domain/fr/page) but causes other issues
  pathnames: {
    '/': '/',
    '/team': {
      [LANG_SR]: '/tim',
      [LANG_EN]: '/team'
    },
    '/projects': {
      [LANG_SR]: '/projekti',
      [LANG_EN]: '/projects',
    },
    '/contacts': {
      [LANG_SR]: '/kontakti',
      [LANG_EN]: '/contacts',
    }
  }
}

export const {Link, redirect, usePathname, useRouter, getPathname} = createLocalizedPathnamesNavigation(i18nConfig);
