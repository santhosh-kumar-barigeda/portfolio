'use client';

import { useTypewriter } from 'react-simple-typewriter';

export const TypeWritterEffect = () => {
  const [text] = useTypewriter({
    words: ['Crafting Modern Experiences', 'Building Scalable Solutions', 'Empowering Your Ideas'],
    loop: 0, // Set to `0` for infinite loop
    typeSpeed: 160, // Slower typing for smoother effect
    deleteSpeed: 30, // Slower deleting for smoother transitions
    delaySpeed: 2000, // Longer delay before starting new word
    onType: () => {
      // Custom function to handle smoother typing transition if needed
    },
    onDelete: () => {
      // Custom function to handle smoother deleting transition if needed
    },
  });

  return (
    <p className='text-4xl md:text-6xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 transition-all duration-300 ease-in-out'>
      {text}
      <span className='animate-pulse text-blue-400'>|</span>
    </p>
  );
};
