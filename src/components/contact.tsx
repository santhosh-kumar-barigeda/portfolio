import { ContactCard } from './contact-card';

export const Contact = () => {
  return (
    <section id='contact'>
      <div className='min-h-[100vh] w-full rounded-md flex items-center justify-center dark:bg-background bg-background dark:bg-grid-white/[0.02] bg-grid-black/[0.03] antialiased relative overflow-hidden'>
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]'></div>
        <div className='w-full p-4'>
          <ContactCard />
        </div>
      </div>
    </section>
  );
};
