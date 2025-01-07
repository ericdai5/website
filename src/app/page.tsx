import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import Link from 'next/link';
const projects = [
  {
    title: 'Nori',
    year: '2024',
    description: 'LLM-Powered Authoring Tool',
    imageUrl: '/nori/nori.png',
    url: '/project/nori',
    tags: ['DESIGN', 'RESEARCH', 'DEVELOPMENT'],
  },
  {
    title: 'Roomadillo',
    year: '2024',
    description: 'Peer-to-peer Housing Marketplace',
    imageUrl: '/roomadillo/roomadillo.png',
    url: '/project/roomadillo',
    tags: ['DESIGN', 'DEVELOPMENT'],
  },
  {
    title: 'Konrad',
    year: '2023',
    description: 'Multimodal Warehouse Management System',
    imageUrl: '/konrad/konrad.png',
    url: '/project/konrad',
    tags: ['DESIGN'],
  },
  {
    title: 'Populus',
    year: '2022',
    description: 'Voter Preparation Mobile App',
    imageUrl: '/populus/populus.png',
    url: '/project/populus',
    tags: ['DESIGN'],
  },
  {
    title: 'Global Design',
    year: '2022',
    description: 'Design Guidelines for i18n and Localization',
    imageUrl: '/globaldesign/globaldesign.png',
    url: '/project/globaldesign',
    tags: ['DESIGN', 'DEVELOPMENT'],
  },
  {
    title: 'Nexus',
    year: '2021',
    description: 'Course Registration Platform',
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
            I help others design and build UI under my studio{' '}
            <Link
              href="https://www.renlabs.xyz/"
              className="text-[var(--text-40)] underline decoration-gray-200 decoration-2 underline-offset-4 hover:text-[var(--text-90)]"
            >
              Ren
            </Link>
            . Previously, I prototyped software at Konrad Group, and devised strategy at Adobe.
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
