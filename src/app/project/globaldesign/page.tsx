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
    supertext?: string;
    title?: string;
    description?: string;
    images?: { src: string; description?: string }[];
  }[];
  caseStudy?: string;
}

const projectData: ProjectData = {
  name: 'Global Design',
  cover: '/globaldesign/globaldesign-cover.png',
  category: 'Education site on internationalization and localization in design',
  header: 'Resource and guidelines for designing global products',
  overview:
    'Global Design is the go-to site for aspiring designers who are interested in learning more about how to design cross-cultural and international products. It is a set of guidelines for designing products that are trying to either internationalize or localize. Global Design also directs designers to additional design resources.',
  additionalInfo: [
    {
      title: 'Team',
      value: 'Myself, Passion Project',
    },
    {
      title: 'Role',
      value: 'Designer, Developer',
    },
    {
      title: 'Duration',
      value: 'Oct - Nov 2022',
    },
  ],
  galleryExhibits: [
    {
      title: 'Defining Goals',
      description:
        'Cross-cultural design and designing for global audiences are topics that are not commonly discussed by general designers. Currently, there are very few sources on the internet that provide a comprehensive but concise set of guidelines for designing products on a global level. \n The value of understanding how to design products that span languages and cultures are very inherent because so many products such as Airbnb and Uber pride themselves on delivering great experiences across multiple demographics. \n Over the course of two weeks, I conducted research over the internet on the methodologies and considerations that go into efficiently designing global products. \n The main issue that I found when it comes to global design is that in many cases, design mistakes related to cross-cultural design and international design are fixed after receiving negative customer feedback when the product was already shipped and launched.',
    },
    {
      title: 'Role of this project',
      description:
        "I hope that this website provides people with ideas on how to incorporate cross-cultural design-thinking into their existing design processes and steps such as user research. On this website, I have provided various links to other resources that are related to international design such as Google's [font support resources](https://fonts.google.com/knowledge/using_type/language_support_in_fonts) as well as international research findings through [Nielson Norman Group](https://www.nngroup.com/).",
    },
    {
      title: 'Current State',
      description:
        'As of October 2022, the website you see is a simple prototype. I have implemented some initial information sections - Introduction, User Research, Language, Culture - with light content. I have also implemented an i18n Language translation feature where you can choose to read the site from available languages. I will continue to build and improve the site as I gain more technical knowledge as well as conduct more research on design methods.',
    },
    {
      title: 'Reflections',
      description:
        'This is the first project that I have created where I take both the role of designer and developer. My experience in doing this project has been extremely rewarding because I was able to get a good sense of the challenges that are associated with transforming designs into a responsive prototype that is built with code. Working with new front-end technology Astro as well as React was also eye-opening. I learned more about the variety of tools I can incorporate into the site to make the user experience more powerful not just from a design standpoint but also from a feature standpoint.',
    },
  ],
  caseStudy:
    'https://www.figma.com/proto/N6D3C3wCNcZ6LAYaDlYhWK/Populus?page-id=0%3A1&type=design&node-id=937-5481&viewport=-628%2C-758%2C0.07&t=XblFOhmYm5hwSdrG-1&scaling=contain&starting-point-node-id=937%3A5481&mode=design',
};

export default function Project() {
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
