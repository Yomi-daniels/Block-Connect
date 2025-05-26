'use client';

import Image from 'next/image';

interface StarProps {
  src: string;
  left: string;
  top: string;
  animationDelay: string;
}

const stars: StarProps[] = [
  { src: '/Star 4.png', left: 'left-[60px]', top: 'top-[5%]', animationDelay: '0.6s' },
  { src: '/Star 5.png', left: 'left-[10%]', top: 'top-[40%]', animationDelay: '2s' },
  { src: '/Star 4.png', left: 'left-[205px]', top: 'top-[15%]', animationDelay: '5s' },
  { src: '/Star 5.png', left: 'left-[26%]', top: 'top-[67%]', animationDelay: '4s' },
  { src: '/Star 4.png', left: 'left-[40%]', top: 'top-[85%]', animationDelay: '5s' },
  { src: '/Star 5.png', left: 'left-[50%]', top: 'top-[83%]', animationDelay: '5s' },
  { src: '/Star 4.png', left: 'left-[60%]', top: 'top-[65%]', animationDelay: '6s' },
  { src: '/Star 5.png', left: 'left-[70%]', top: 'top-[12%]', animationDelay: '3.5s' },
  { src: '/Star 4.png', left: 'left-[80%]', top: 'top-[75%]', animationDelay: '9s' },
  { src: '/Star 5.png', left: 'left-[90%]', top: 'top-[14%]', animationDelay: '3s' },
];

export default function StarsAnimation() {
  return (
    <div>
      {stars.map(({ src, left, top, animationDelay }, i) => (
        <span
          key={i}
          className={`fixed z-50 overflow-x-hidden animate-animate-img animate-glow ${left} ${top}`}
          style={{ animationDelay }}
        >
          <Image src={src} alt="Star" width={20} height={20} priority />
        </span>
      ))}
    </div>
  );
}
