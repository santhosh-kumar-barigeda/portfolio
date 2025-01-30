import Image from 'next/image';
import { Spotlight } from './aceternity/spotlight-new';
import { TextGenerateEffect } from './aceternity/text-generate-effect';
import { TypewriterEffectSmooth } from './aceternity/typewriter-effect';
import { Button } from './ui/button';

export const Hero = () => {
  const words = [
    {
      text: 'Crafting',
    },
    {
      text: 'Digital',
    },
    {
      text: 'Experiences',
    },
    {
      text: 'with',
    },
    {
      text: 'Passion',
      className: 'bg-gradient-to-r from-orange-600 to-orange-500 text-transparent dark:text-transparent bg-clip-text',
    },
  ];

  const word = ` Hi, I’m Santhosh. I build seamless, scalable, and visually captivating web applications using cutting-edge technologies. Let’s bring
              your ideas to life.`;

  return (
    <section id='about'>
      <div className='h-[100vh] w-full rounded-md flex items-center justify-center dark:bg-background bg-background dark:bg-grid-white/[0.03] bg-grid-black/[0.05] antialiased relative overflow-hidden'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]'></div>
        <Spotlight />
        <div className=' p-4 max-w-7xl mx-auto relative z-10  w-full pt-20 md:pt-0 flex flex-col items-center justify-center gap-8'>
          <img src='/my-pic.jpg' alt="santhosh's picture" className='size-24 md:size-48 rounded-3xl object-cover drop-shadow-2xl' />
          <div className='flex flex-col items-center justify-center gap-2'>
            <TypewriterEffectSmooth words={words} />
            <TextGenerateEffect words={word} className='' />
          </div>

          <div className='flex items-center gap-3'>
            <Button variant='outline' size='icon'>
              <a href='https://www.linkedin.com/in/santhosh-kumar-sbk' target='_blank'>
                <Image src='/linkedin.svg' alt='github' width={100} height={100} className='size-5 object-contain' />
              </a>
            </Button>
            <Button variant='outline' size='icon'>
              <a href='https://github.com/santhosh-kumar-barigeda' target='_blank'>
                <Image src='/github.svg' alt='github' width={100} height={100} className='dark:hidden size-5 object-contain' />
                <Image src='/github-dark.svg' alt='github' width={100} height={100} className='hidden dark:block size-5 object-contain' />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
