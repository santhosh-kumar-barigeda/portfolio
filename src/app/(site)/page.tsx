import { Contact } from '@/components/contact';
import { Hero } from '@/components/hero';
import { Navbar } from '@/components/navbar';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <div className='dark:bg-background bg-background'>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
