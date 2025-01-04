import GalleryExhibit from '@/components/GalleryExhibit';
import ProjNav from '@/components/ProjNav';
import SummarySection from '@/components/SummarySection';

interface ProjectData {
  name: string;
  cover: string;
  category: string;
  header: string;
  overview: string;
  additionalInfo: {
    title: string;
    value: string;
  }[];
  galleryExhibits: {
    title?: string;
    description?: string;
    images?: { src: string; description?: string }[];
  }[];
  caseStudy?: string;
}

const projectData: ProjectData = {
  name: 'Konrad',
  cover: '/konrad/konrad-cover.png',
  category: 'Multimodal Interaction for Warehouse Management',
  header: 'Digital load sheets for warehouse management',
  overview:
    "During the spring of 2023, I worked at Konrad Group as a contract Product Designer working for a Fortune 500 Automotive Parts enterprise. I collaborated with Konrad's Design Director Fredrick Poulsen and three other designers.\nDuring my time there, I designed a digital Load Sheet feature that speeds up the trailer loading process from workers by allowing flexible input from both smart device scanners and desktop. My time at Konrad involved building out, exploring, and pitching ideas to the senior designers and leadership and syncs with the strategy team.",
  additionalInfo: [
    {
      title: 'Team',
      value: 'Frederik Poulsen, Peter Braunstein, Felicia Evangeline, Novia Chao, Tanya Yan',
    },
    {
      title: 'Role',
      value: 'Product Designer',
    },
    {
      title: 'Duration',
      value: 'Jan - Mar 2023',
    },
  ],
  galleryExhibits: [
    {
      title: 'Digital Load Sheet',
      description:
        'I was the sole designer behind the digital load sheet feature for the enterprise-facing platform that allowed warehouse workers to receive updates about the location and details of pallets within a shipping trailer as the trailer is being loaded. Reach out for additional details.',
    },
    {
      title: 'RF Scanner - Trailer Loading',
      description:
        'I worked closely with three other designers in crafting the experiences of workers using RF (Radio Frequency) Scanners in simplifying the scanning process as well as improving the interface for accessibility. Reach out for additional details.',
    },
  ],
};

export default function KonradProject() {
  return (
    <>
      <ProjNav projectData={projectData} />
      <main className="mx-auto mt-16 max-w-screen-2xl px-6 lg:px-16">
        <article className="mx-auto flex max-w-[1080px] flex-col gap-8 pb-16 pt-8 md:gap-16 md:pt-16">
          <SummarySection
            cover={projectData.cover}
            header={projectData.header}
            overview={projectData.overview}
            additionalInfo={projectData.additionalInfo}
            caseStudy={projectData.caseStudy}
          />
          <section className="flex flex-col">
            {projectData.galleryExhibits.map((exhibit) => (
              <GalleryExhibit
                key={exhibit.title}
                title={exhibit.title}
                description={exhibit.description}
                images={exhibit.images}
              />
            ))}
          </section>
        </article>
      </main>
    </>
  );
}
