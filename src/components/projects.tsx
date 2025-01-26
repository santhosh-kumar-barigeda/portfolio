import Image from 'next/image';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { projects } from '@/data';
import Link from 'next/link';

export const Projects = () => {
  return (
    <section id='projects' className='mb-52 min-h-[100vh] px-4 flex flex-col items-center justify-center'>
      <div className='w-full max-w-6xl mx-auto'>
        <h2 className='text-center text-3xl font-bold'>My Projects</h2>
        <p className='text-muted-foreground text-center'>Explore some of my latest work and creative endeavors.</p>
      </div>

      {/* Grid Container */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
        {projects.map((project, index) => (
          <CardContainer key={index} className='w-full h-full'>
            <CardBody className='bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-5 border'>
              <CardItem translateZ='50' className='text-xl font-bold text-neutral-600 dark:text-white'>
                {project.title}
              </CardItem>
              <CardItem as='p' translateZ='60' className='text-sm max-w-sm mt-2 text-muted-foreground line-clamp-4'>
                {project.description}
              </CardItem>
              <CardItem translateZ='100' className='w-full mt-4'>
                <Image
                  src={project.image}
                  height='1000'
                  width='1000'
                  className='w-full aspect-video border object-cover rounded-xl group-hover/card:shadow-xl'
                  alt={`Thumbnail for ${project.title}`}
                />
              </CardItem>
              <div className='flex justify-between items-center mt-7'>
                <Link href={project.sourceCode} target='_blank'>
                  <CardItem translateZ={20} as='button' className='px-1 py-2 rounded-xl text-sky-500 text-xs font-bold'>
                    View Source Code
                  </CardItem>
                </Link>
                <Link href={project.link} target='_blank'>
                  <CardItem translateZ={20} as='button' className='px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold'>
                    View Live Website
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </section>
  );
};
