import Link from 'next/link';
import { Dynalight } from 'next/font/google';

const logo = Dynalight({
  variable: '--font-logo',
  subsets: ['latin'],
  weight: ['400'],
});

export const Logo = () => {
  return (
    <Link href='/' className={`${logo.className} md:text-3xl font-bold`}>
      Santhosh<span className='text-primary'>.</span>
    </Link>
  );
};
