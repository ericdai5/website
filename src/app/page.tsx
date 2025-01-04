import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const projects = [
  {
    title: 'Nori',
    year: '2024',
    description: 'A comprehensive design system for enterprise applications',
    imageUrl: '/nori/nori.png',
    url: '/project/nori',
    tags: ['DESIGN', 'RESEARCH', 'DEV'],
  },
  {
    title: 'Roomadillo',
    year: '2024',
    description: 'Simplifying the user booking-experience of a sublease matching platform',
    imageUrl: '/roomadillo/roomadillo.png',
    url: '/project/roomadillo',
    tags: ['DESIGN', 'DEV'],
  },
  {
    title: 'Konrad',
    year: '2023',
    description: 'Multimodal warehouse management system for a Fortune 500 enterprise',
    imageUrl: '/konrad/konrad.png',
    url: '/project/konrad',
    tags: ['DESIGN'],
  },
  {
    title: 'Populus',
    year: '2022',
    description: 'Prototyping a tool that makes voting preparation simple and easy',
    imageUrl: '/populus/populus.png',
    url: '/project/populus',
    tags: ['DESIGN'],
  },
  {
    title: 'Global Design',
    year: '2022',
    description: 'Coding an education site on internationalization and localization in design',
    imageUrl: '/globaldesign/globaldesign.png',
    url: '/project/globaldesign',
    tags: ['DESIGN'],
  },
  {
    title: 'Nexus',
    year: '2021',
    description: 'Reimagining the Penn course registration experience',
    imageUrl: '/nexus/nexus.png',
    url: '/project/nexus',
    tags: ['DESIGN'],
  },
];

export default function Home() {
  return (
    <>
      <main className="row-start-2 mx-auto flex max-w-screen-2xl flex-col items-center px-[24px] sm:items-start lg:px-[48px]">
        <div className="flex max-w-[684px] flex-col gap-10 pb-[96px] pt-[48px] text-left leading-normal">
          <h3 className="text-[var(--text-90)]">Eric Dai</h3>
          <h3 className="text-[var(--text-60)]">
            I create interface tools that amplify human understanding and creative expression. I am
            a candidate for MSE in Computer Science at Penn.
          </h3>
          <h3 className="text-[var(--text-60)]">
            I help others design and build UI under my studio Ren. Previously, I prototyped software
            at Konrad Group, and devised strategy at Adobe.
          </h3>
        </div>
        <Navigation />
        <section className="bg mb-[96px] w-full">
          <div className="grid grid-cols-1 gap-x-[16px] gap-y-[48px] sm:grid-cols-2 sm:gap-y-[96px] xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                year={project.year}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                url={project.url}
                tags={project.tags}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
