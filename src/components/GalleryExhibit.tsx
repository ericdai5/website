import GalleryText from './GalleryText';
import GalleryImage from './GalleryImage';

interface GalleryExhibitProps {
  title?: string;
  description?: string;
  images?: {
    src: string;
    description?: string;
  }[];
}

export default function GalleryExhibit({ title, description, images }: GalleryExhibitProps) {
  return (
    <div className="flex flex-col gap-6 border-t border-[var(--border)] pb-8 md:pb-16">
      {title && <GalleryText title={title} description={description} />}
      {images &&
        images.map((image, index) => (
          <GalleryImage
            key={`${image.src}-${index}`}
            src={image.src}
            description={image.description}
          />
        ))}
    </div>
  );
}
