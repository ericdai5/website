'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useEffect, useState } from 'react';

export default function NavItems() {
  const pathname = usePathname();
  const workRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const currentRef =
      pathname === '/'
        ? workRef.current
        : pathname === '/about'
          ? aboutRef.current
          : contactRef.current;

    if (currentRef) {
      const { offsetLeft, offsetWidth } = currentRef;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [pathname, isMounted]);

  return (
    <div className="relative flex flex-row gap-8">
      <div ref={aboutRef}>
        <Link href="/about">
          <Button className={pathname === '/about' ? 'text-black' : ''}>About</Button>
        </Link>
      </div>
      <div ref={contactRef}>
        <Link href="/contact">
          <Button className={pathname === '/contact' ? 'text-black' : ''}>Contact</Button>
        </Link>
      </div>
      {isMounted && (
        <div
          className="absolute bottom-0 h-0.5 bg-black transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            transform: 'translateY(20px)',
          }}
        />
      )}
    </div>
  );
}
