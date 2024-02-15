"use client"
import { useEffect, useRef } from 'react';
import anime from 'animejs';

import { Icons, Stack } from "@/components";

export function Carrusel() {
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current as HTMLDivElement | null;

    // Función para manejar el evento de scroll
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const translateX = content ? -content.clientWidth * scrollPercent : scrollPercent;
      
      anime({
        targets: content,
        translateX: translateX,
        easing: 'linear',
        duration: 0, // No queremos que anime.js anime la transición ya que ya estamos manejando la animación con el evento de scroll
        loop: false
      });
    };

    // Agregar evento de scroll al montar el componente
    window.addEventListener('scroll', handleScroll);

    // Remover el evento de scroll al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <Stack
        direction="row"
        justify="spaceBetween"
        align="center"
        className="mt-20 transform rotate-[2deg]"
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
  );
};
