import type { Metadata } from 'next';
import { Geist, Open_Sans, Montserrat, Nunito, Outfit } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers/providers';
import { ScrollArea } from '@/components/ui/scroll-area';

const geistSans = Outfit({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className='scroll-smooth' suppressHydrationWarning>
      <body className={cn(geistSans.className, `antialiased`)} suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
