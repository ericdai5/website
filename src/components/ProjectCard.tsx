import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  //   tags: string[];
}

export default function ProjectCard({ title, description, imageUrl }: ProjectCardProps) {
  return (
    <div className="w-full flex flex-col gap-4 p-9 border border-[var(--border)] rounded-xl hover:border-[var(--border-hover)] transition-colors">
      <div className="w-full aspect-video bg-gray-100 rounded-xl overflow-hidden relative">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <h2>{title}</h2>
        <p>{description}</p>
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
