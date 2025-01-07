import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Divider from './Divider';
import { parseMarkdownLinks } from '@/utils/parseMarkdownLinks';

interface AdditionalInfo {
  title: string;
  value: string;
}

interface SummarySectionProps {
  cover: string;
  header: string;
  overview: string;
  additionalInfo: AdditionalInfo[];
  caseStudy?: string;
}

export default function SummarySection({
  cover,
  header,
  overview,
  additionalInfo,
  caseStudy,
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
      <Divider />
      <div className="flex w-full max-w-[980px] flex-col gap-8 md:flex-row md:gap-16">
        {/* additional info section */}
        <div className="flex w-full flex-col gap-4 md:w-1/3">
          {additionalInfo.map((info) => (
            <div className="flex flex-col gap-2" key={info.title}>
              <p className="text-[17px] text-[var(--text-40)]">{info.title}</p>
              <p className="text-[17px]">{parseMarkdownLinks(info.value)}</p>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col gap-2 md:w-2/3">
          <p className="text-[17px] text-[var(--text-40)]">Overview</p>
          <div className="flex flex-col gap-4">
            {overview.split('\n').map((paragraph, index) => (
              <p key={index} className="text-[17px]">
                {parseMarkdownLinks(paragraph)}
              </p>
            ))}
          </div>
          {/* case study section */}
          {caseStudy && (
            <Link
              href={caseStudy}
              className="mt-6 w-fit rounded-lg bg-gray-100 px-8 py-3 text-[17px] text-[var(--text-60)] hover:bg-gray-200 hover:text-[var(--text-90)]"
            >
              View full case study
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
