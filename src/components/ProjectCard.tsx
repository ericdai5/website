import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  year,
  description,
  imageUrl,
  url,
  tags,
}: ProjectCardProps) {
  return (
    <Link href={url}>
      <div className="flex w-full cursor-pointer flex-col gap-6">
        <div className="relative w-full overflow-hidden rounded-xl">
          <div className="group relative w-full overflow-hidden rounded-xl border border-[var(--border)]">
            <Image
              src={imageUrl}
              alt={title}
              width={1080}
              height={1080}
              quality={100}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </div>
        {/* title and description */}
        <div className="flex flex-col gap-1">
          <p className="font-[450] text-black">
            {title}, <span className="font-[350]">{year}</span>
          </p>
          <p className="text-[var(--paragraph-60)]">{description}</p>
        </div>
        {/* tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-geist rounded-lg bg-gray-50 px-[10px] py-[6px] text-[12px] font-medium tracking-[-0.01em] text-[var(--paragraph-40)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
