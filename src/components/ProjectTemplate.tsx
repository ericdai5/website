import GalleryExhibit from '@/components/GalleryExhibit';
import ProjNav from '@/components/ProjNav';
import SummarySection from '@/components/SummarySection';

export interface ProjectData {
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
    supertext?: string;
    title?: string;
    description?: string;
    images?: { src: string; description?: string }[];
  }[];
  buttons?: {
    text: string;
    link: string;
  }[];
}

export default function ProjectTemplate({ projectData }: { projectData: ProjectData }) {
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
            buttons={projectData.buttons}
          />
          <section className="flex flex-col">
            {projectData.galleryExhibits.map((exhibit, index) => (
              <GalleryExhibit
                key={`gallery-${index}`}
                supertext={exhibit.supertext}
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
