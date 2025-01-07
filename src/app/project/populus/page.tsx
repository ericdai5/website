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
    supertext?: string;
    description?: string;
    images?: { src: string; description?: string }[];
  }[];
  buttons?: {
    text: string;
    link: string;
  }[];
}

const projectData: ProjectData = {
  name: 'Populus',
  cover: '/populus/populus-cover.png',
  category: 'Voter Preparation App',
  header: 'Empowering voters with an all-in-one election platform',
  overview:
    'The current voter preparation experience is confusing and difficult to navigate. Information regarding poll place locations, candidate summaries, and election deadlines is disjointed and unreliable. Additionally, young voters are not as actively engaged in the voting process. \n Populus is a public service app designed to assist voters in casting their votes by providing them with the most up-to-date election information and tools to ensure an enjoyable voting experience. Populus aims to bridge the gap between voter preparation and active involvement in our democracy.',
  additionalInfo: [
    {
      title: 'Role',
      value: 'Sole Designer, Passion Project',
    },
    {
      title: 'Duration',
      value: 'Oct - Nov 2022',
    },
    {
      title: 'Tools',
      value: 'Figma',
    },
  ],
  galleryExhibits: [
    {
      images: [
        {
          src: '/populus/populus-home.png',
          description:
            'After completing a linear registration process, the user is directed to the homepage, where the core functionalities - sample ballot and polling place search - are readily available. Optional quests are provided to guide the user in becoming more prepared. Upon finishing quests or casting a vote in person, users can view their progress and impact from their profile.',
        },
        {
          src: '/populus/populus-search.png',
          description:
            'The optimized polling place search experience includes several key features: a time picker displaying voting days, inclusive filter settings for transportation modes to help users locate more accessible polling places, and an expandable direct search bar.',
        },
        {
          src: '/populus/populus-detail.png',
          description:
            'To help voters avoid encountering long waits, polling place information areas can be expanded to display details such as wait time estimates based on past traffic. Users can save their chosen polling places to a favorites folder and be redirected to Apple and Google Maps for navigation.',
        },
        {
          src: '/populus/populus-candidate.png',
          description:
            'Users can explore candidate information by accessing their profiles through the Sample Ballot. In the Card View, they can compare different aspects of candidates, mark their favorite candidate, and share candidate profiles.',
        },
        {
          src: '/populus/populus-design.png',
          description:
            'The Populus design system uses a mixture of transparent and solid colors to bring about seamless transition between light and darkmode..',
        },
      ],
    },
  ],
  buttons: [
    {
      text: 'View full case study',
      link: 'https://www.figma.com/proto/N6D3C3wCNcZ6LAYaDlYhWK/Populus?page-id=0%3A1&node-id=937-5481&viewport=-266%2C80%2C0.07&t=lmVSn7MNHopZyS5J-1&scaling=contain&content-scaling=fixed&starting-point-node-id=937%3A5481',
    },
  ],
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
