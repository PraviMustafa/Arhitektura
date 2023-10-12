import '../globals.css'
import {Inter, Roboto} from 'next/font/google'

import { Navbar, Logo, Footer } from '@components/server';
import { LanguagePicker } from '@components/client';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({ children, params: { locale } }) {
    return (
        <html lang={locale}>
        <body className={inter.className}>
        <div className="container">
            <Logo/>
            <LanguagePicker activeLanguage={locale}/>
            <Navbar/>
            {children}
            <Footer/>
        </div>
        </body>
        </html>
    )
}
