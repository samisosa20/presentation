"use client"
import { useEffect, useRef } from 'react';
import anime from 'animejs';

import { Icons, Stack } from "@/components";
import { cn } from '@/src/lib/utils';

interface CarruselProps {
  show: boolean;
}

export function Carrusel({ show }: CarruselProps) {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current as HTMLDivElement | null;

    // Función para manejar el evento de scroll
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const translateX = content ? -content.clientWidth * scrollPercent + 175 : scrollPercent;
      
      anime({
        targets: content,
        translateX: translateX,
        rotate: 2,
        easing: 'linear',
        duration: 0,
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Stack className={cn(!show ? 'invisible opacity-0' : 'visible opacity-100 relative', 'relative transition-all ease-in-out duration-700')}>
      <Stack className='w-20 h-40 bg-gradient-to-r from-bg-400 absolute z-10' />
      <Stack
        direction="row"
        justify="spaceBetween"
        align="center"
        className="mt-20 transform rotate-[2deg] translate-x-[175px]"
        ref={contentRef}
      >
        <Icons.html />
        <Icons.css />
        <Icons.js />
        <Icons.sass />
        <Icons.ts />
        <Icons.bootstrap />
        <Icons.tailwind />
        <Icons.react />
        <Icons.native />
        <Icons.nextjs />
        <Icons.vuejs />
        <Icons.nodejs />
        <Icons.laravel />
        <Icons.nestjs />
      </Stack>
      <Stack className='w-20 h-40 bg-gradient-to-r from-transparent to-bg-400 absolute z-10 right-0' />
    </Stack>
  );
};
