import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';
import LiveTime from '@/components/LiveTime';

const projects = [
  {
    title: 'Nori',
    description: 'A comprehensive design system for enterprise applications',
    imageUrl: '/nori.png',
  },
  {
    title: 'Roomadillo',
    description: 'Patient management system with intuitive interface',
    imageUrl: '/nori.png',
  },
  {
    title: 'Konrad Group',
    description: 'Complete redesign of an e-commerce platform',
    imageUrl: '/nori.png',
  },
  {
    title: 'Adobe',
    description: 'Data visualization dashboard for financial analytics',
    imageUrl: '/nori.png',
  },
  {
    title: 'Nexus',
    description: 'Interactive learning platform for students',
    imageUrl: '/nori.png',
  },
  {
    title: 'Global Design',
    description: 'Modern social media application',
    imageUrl: '/nori.png',
  },
];

export default function Home() {
  return (
    <div className="w-full">
      <nav className="flex w-full flex-row border-b border-b-[var(--border)] py-5">
        <div className="mx-auto flex w-full max-w-screen-2xl flex-row justify-between px-[60px]">
          <div className="flex flex-row gap-16">
            <span className="font-switzer text-[22px] font-[400] tracking-[-0.01em]">Eric Dai</span>
            <div className="flex flex-row gap-8">
              <Button>Work</Button>
              <Button>About</Button>
              <Button>Contact</Button>
            </div>
          </div>
          <div className="hidden flex-row gap-8 lg:flex">
            <span className="button">New York, NY</span>
            <LiveTime timezone="America/New_York" />
          </div>
        </div>
      </nav>
      <main className="row-start-2 mx-auto flex max-w-screen-2xl flex-col items-center gap-8 px-[60px] sm:items-start">
        <div className="flex max-w-[640px] flex-col gap-6 py-[80px] text-left leading-normal">
          <h3>
            I create <span className="emphasis">tools for thought</span> - interfaces that amplify
            human understanding and creative expression. I am a candidate for MSE in Computer
            Science at the <span className="emphasis">University of Pennsylvania</span>.
          </h3>
          <h3>
            I help others design and build UI under my studio <span className="emphasis">Ren</span>.
            Previously, I prototyped software at <span className="emphasis">Konrad Group</span>, and
            devised strategy at <span className="emphasis">Adobe</span>.
          </h3>
        </div>

        <section className="w-full py-[40px]">
          {/* <h2 className="mb-8 text-2xl font-medium">Selected Work</h2> */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
