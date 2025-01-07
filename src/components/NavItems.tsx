'use client';

import Button from '@/components/Button';
import { useRef, useState } from 'react';
import Modal from './Modal';
import About from './About';
import Contact from './Contact';
export default function NavItems() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <div className="relative flex flex-row gap-8">
        <div ref={aboutRef}>
          <Button onClick={() => setIsAboutOpen(true)}>About</Button>
        </div>
        <div ref={contactRef}>
          <Button onClick={() => setIsContactOpen(true)}>Contact</Button>
        </div>
      </div>

      <Modal isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)}>
        <About />
      </Modal>
      <Modal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
        <Contact />
      </Modal>
    </>
  );
}
