import Link from 'next/link';

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="border-t border-[var(--border)] p-6">
        <h4 className="text-[var(--text-90)]">Contact</h4>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col border-t border-[var(--border)] px-6 py-6 hover:bg-gray-100">
          <Link href="mailto:ericdai@sas.upenn.edu" className="text-[17px]">
            Email
          </Link>
        </div>
        <div className="flex flex-col border-t border-[var(--border)] px-6 py-6 hover:bg-gray-100">
          <Link href="https://www.linkedin.com/in/daieric/" className="text-[17px]">
            LinkedIn
          </Link>
        </div>
        <div className="flex flex-col border-t border-[var(--border)] px-6 py-6 hover:bg-gray-100">
          <Link href="https://x.com/ericcdai" className="text-[17px]">
            Twitter
          </Link>
        </div>
        <div className="flex flex-col border-t border-[var(--border)] px-6 py-6 hover:bg-gray-100">
          <Link href="https://github.com/ericdai" className="text-[17px]">
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
