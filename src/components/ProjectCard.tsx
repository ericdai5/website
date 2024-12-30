import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  //   tags: string[];
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="flex w-full flex-col gap-12 rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] p-9 transition-colors hover:border-[var(--border-hover)]">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <h2>{title}</h2>
        <p className="text-[var(--paragraph-60)]">{description}</p>
        {/* Potentially add tags here */}
        {/* <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
              {tag}
            </span>
          ))}
        </div> */}
      </div>
    </div>
  );
}
