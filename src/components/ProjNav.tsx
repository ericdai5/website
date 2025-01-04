import Image from 'next/image';
import Link from 'next/link';

interface ProjectData {
  name: string;
  category: string;
}

interface ProjNavProps {
  projectData: ProjectData;
}

export default function ProjNav({ projectData }: ProjNavProps) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex w-full flex-row border-b border-b-[var(--border)] bg-background py-4">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-row items-center justify-between px-6">
        <div className="flex w-full flex-row items-center justify-between gap-16">
          <div className="flex flex-row items-center gap-6">
            <p className="text-[var(--text-90)]">{projectData.name}</p>
            <p className="text-[var(--text-40)]">{projectData.category}</p>
          </div>
          <Link href="/" className="rounded-md p-2 hover:bg-[var(--hover)]">
            <Image src="/x.svg" alt="Close" width={18} height={18} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
