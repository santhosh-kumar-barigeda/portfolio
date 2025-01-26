import { skills } from '@/data';
import Image from 'next/image';

export const Skills = () => {
  return (
    <section id='skills' className='px-4'>
      <div className='min-h-[100vh] w-full bg-background dark:bg-grid-small-white/[0.08] bg-grid-small-black/[0.08] relative flex items-center justify-center'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_90%,black)]'></div>
        <div className='w-full max-w-5xl mx-auto'>
          <h2 className='text-center text-3xl font-bold'>Skills</h2>
          <p className='text-muted-foreground text-center'>A showcase of the tools and technologies I excel at.</p>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
            {skills.map((skill, index) => (
              <div key={index} className='border bg-muted/30 rounded-lg p-3 flex gap-4 items-center'>
                <Image src={skill.image} alt={skill.name} width={100} height={100} className='dark:hidden size-[70px] object-contain' />
                <Image
                  src={skill.darkImage}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className='hidden dark:block text-white size-[40px] object-contain'
                />
                <div className='space-y-1'>
                  <h4 className='text-base font-bold'>{skill.name}</h4>
                  <p className='text-muted-foreground text-xs'>{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
