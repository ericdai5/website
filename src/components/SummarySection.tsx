import React from 'react';
import Image from 'next/image';

interface AdditionalInfo {
  title: string;
  value: string;
}

interface SummarySectionProps {
  cover: string;
  header: string;
  overview: string;
  additionalInfo: AdditionalInfo[];
}

export default function SummarySection({
  cover,
  header,
  overview,
  additionalInfo,
}: SummarySectionProps) {
  return (
    <div className="flex flex-col gap-8 md:gap-16">
      <Image
        src={cover}
        alt="Project Cover"
        width={2000}
        height={2000}
        quality={100}
        className="h-auto w-full rounded-lg"
      />
      {/* header section */}
      <header className="flex w-full flex-col gap-4 lg:w-2/3">
        <h1>{header}</h1>
      </header>
      <div className="flex flex-col gap-8 md:flex-row md:gap-24">
        <div className="flex w-full flex-col gap-2 md:w-2/3">
          <p className="text-[17px] text-[var(--text-40)]">Overview</p>
          <p className="text-[17px]">{overview}</p>
        </div>
        {/* additional info section */}
        <div className="flex w-full flex-col gap-4 md:w-1/3">
          {additionalInfo.map((info) => (
            <div className="flex flex-col gap-2" key={info.title}>
              <p className="text-[17px] text-[var(--text-40)]">{info.title}</p>
              <p className="text-[17px]">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
