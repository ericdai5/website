import React from 'react';

interface GalleryTextProps {
  title?: string;
  description?: string;
  supertext?: string;
}

export default function GalleryText({ title, description, supertext }: GalleryTextProps) {
  return supertext || title || description ? (
    <div className="flex w-full max-w-[980px] flex-col gap-4 md:flex-row md:gap-16">
      <div className="flex w-full flex-col gap-4 md:w-1/3">
        {supertext && <p className="text-[var(--text-60)]">{supertext}</p>}
        {title && <h4>{title}</h4>}
      </div>
      {description && (
        <div className="flex w-full flex-col gap-4 md:w-2/3">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-[17px]">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  ) : (
    <div className="h-12" />
  );
}
