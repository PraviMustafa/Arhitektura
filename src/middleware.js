import createMiddleware from 'next-intl/middleware';
import { i18nConfig } from './i18n/i18n';
 
const nextIntlMiddleware = createMiddleware({ ...i18nConfig });

export const config = {
  // Skip all paths that should not be internationalized.
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

export default function middleware(req) {
  req.headers.set('X-URL', req.url);
  return nextIntlMiddleware(req);
}
