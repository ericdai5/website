'use client';
import Link from 'next/link';
import LiveTime from './LiveTime';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isProjectPage = pathname.includes('/project');

  return (
    <footer
      className={`mx-auto flex w-full max-w-screen-2xl flex-col justify-between gap-6 border-t border-[var(--border)] px-[24px] pb-24 pt-12 sm:flex-row ${isProjectPage ? 'pt-6' : 'pt-12'} ${isProjectPage ? 'lg:px-6' : 'lg:px-12'}`}
    >
      <div className="flex w-full flex-col items-start gap-1">
        <p className="text-[var(--text-60)]">New York, NY</p>
        <LiveTime />
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <div className="flex flex-col items-start gap-1">
          <Link
            href="https://www.linkedin.com/in/daieric/"
            className="font-geist text-[18px] font-[350] tracking-[-0.01em] text-[var(--text-60)] hover:text-[var(--text-90)]"
          >
            LinkedIn
          </Link>
          <Link
            href="https://x.com/ericcdai"
            className="font-geist text-[18px] font-[350] tracking-[-0.01em] text-[var(--text-60)] hover:text-[var(--text-90)]"
          >
            Twitter
          </Link>
          <Link
            href="mailto:ericdai@sas.upenn.edu"
            className="font-geist text-[18px] font-[350] tracking-[-0.01em] text-[var(--text-60)] hover:text-[var(--text-90)]"
          >
            Email
          </Link>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-1">
        <p className="text-[var(--text-60)]">Copyright © 2025 Eric Dai.</p>
        <p className="text-[var(--text-60)]">All rights reserved.</p>
      </div>
    </footer>
  );
}
