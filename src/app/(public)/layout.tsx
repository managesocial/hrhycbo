import type { Metadata } from 'next';
import { fontSans, fontHeading } from '../config/fonts';
import '../globals.css';
import { Providers } from '../providers';
import { Navbar } from '@/components/global/Navbar';
import { Footer } from '@/components/global/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Horizon Rivers of Hope Youth CBO | Eldoret, Kenya',
    template: '%s | Horizon Rivers of Hope Youth CBO',
  },
  description: 'A youth-led movement rooted in Eldoret, Uasin Gishu County, driving environmental sanitation, youth eco-enterprises, health, WASH, and peacebuilding.',
  keywords: [
    'Horizon Rivers of Hope',
    'Horizon Rivers of Hope',
    'Youth CBO Eldoret',
    'Uasin Gishu County',
    'Environmental Sanitation',
    'Youth Empowerment',
    'Eco-Enterprises',
    'Plastic Recycling Eldoret',
    'Peacebuilding',
    'WASH Kenya',
  ],
  authors: [{ name: 'Horizon Rivers of Hope Youth CBO' }],
  creator: 'Horizon Rivers of Hope Youth CBO',
  publisher: 'Horizon Rivers of Hope Youth CBO',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: 'https://horizonrivers.org',
    title: 'Horizon Rivers of Hope Youth CBO',
    description: 'Transforming communities through environmental sanitation, youth empowerment, and peacebuilding in Eldoret.',
    siteName: 'Horizon Rivers of Hope Youth CBO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Horizon Rivers of Hope Youth CBO',
    description: 'Transforming communities through environmental sanitation, youth empowerment, and peacebuilding in Eldoret.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${fontSans.variable} ${fontHeading.variable}`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}