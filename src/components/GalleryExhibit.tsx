import GalleryText from './GalleryText';
import GalleryImage from './GalleryImage';

interface GalleryExhibitProps {
  supertext?: string;
  title?: string;
  description?: string;
  images?: {
    src: string;
    description?: string;
  }[];
}

export default function GalleryExhibit({
  supertext,
  title,
  description,
  images,
}: GalleryExhibitProps) {
  return (
    <div className="flex flex-col border-t border-[var(--border)] py-8 md:py-16">
      <GalleryText title={title} description={description} supertext={supertext} />
      {images && images.length > 0 && (
        <div className="flex flex-col gap-6 pt-8 md:pt-16">
          {images.map((image, index) => (
            <GalleryImage
              key={`${image.src}-${index}`}
              src={image.src}
              description={image.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}
