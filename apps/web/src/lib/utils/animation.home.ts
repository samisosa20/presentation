"use client";
import { useEffect, useRef, useState } from "react";
import anime from "animejs";

export function animateHome() {
  const typewriterRef = useRef(null);

  const [isEndTitleAnimation, setIsEndTitleAnimation] = useState(false);

  useEffect(() => {
    const typewriter = typewriterRef.current as HTMLDivElement | null;

    anime({
      targets: typewriter,
      easing: "easeInOutQuad",
      translateX: ['50%', 0],
      translateY: ['50%', 0],
      duration: 2000,
      delay: 6500,
      complete: () => {
        setIsEndTitleAnimation(true);
      },
    });
  }, []);
  return {
    typewriterRef,
    isEndTitleAnimation,
  };
}
