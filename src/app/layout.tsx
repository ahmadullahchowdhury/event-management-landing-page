import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../../styles/globals.css';
// import dynamic from "next/dynamic";

// const  ThemeProviders = dynamic(() => import('./theme-providers'), { ssr: false })

// const inter = Inter({ subsets: ["latin"] });

const istok_Web = Poppins({
  subsets: ['latin'],
  style: ['normal'],
  weight: [  '100', '200', '300', '500', '400',  '600' ,'700',  '800' , '900']
});

export const metadata: Metadata = {
  title: 'Event Management Landing Page',
  description: 'Event Management Landing Page'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={istok_Web.className}>{children}</body>
    </html>
  );
}
