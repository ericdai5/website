import React from 'react';

interface GalleryTextProps {
  title: string;
  description?: string;
}

export default function GalleryText({ title, description }: GalleryTextProps) {
  return (
    <div className="mb-2 mt-8 flex w-full flex-col gap-4 md:mb-8 md:mt-16 md:w-2/3">
      <h4>{title}</h4>
      {description && (
        <div className="flex flex-col gap-4">
          {description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-[17px]">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
