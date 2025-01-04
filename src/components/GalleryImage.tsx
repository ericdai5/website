import Image from 'next/image';

interface ProjectCoverProps {
  src: string;
  description?: string;
}

export default function ProjectCover({ src, description }: ProjectCoverProps) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={src}
        alt="Project Cover"
        width={2000}
        height={2000}
        quality={100}
        className="h-auto w-full rounded-lg"
      />
      {description && <p className="text-[17px] text-[var(--text-60)]">{description}</p>}
    </div>
  );
}
