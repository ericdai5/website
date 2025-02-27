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
    <div className="flex w-full flex-col gap-6">
      {/* div around image */}
      <Link href={url}>
        <div className="relative w-full overflow-hidden rounded-lg">
          <div className="group relative w-full overflow-hidden rounded-lg">
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
      </Link>
      {/* title and description */}
      <div className="flex flex-col gap-1">
        <p className="font-[450] text-black">
          {title}, <span className="font-[350]">{year}</span>
        </p>
        <p className="text-[var(--text-60)]">{description}</p>
      </div>
      {/* tags */}
      <div className="flex flex-wrap gap-[6px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-[6px] bg-gray-100 px-[10px] py-[6px] font-geist text-[12px] font-[480] tracking-[-0.005em] text-[var(--text-40)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
