import Button from '@/components/Button';
import ProjectCard from '@/components/ProjectCard';

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
      <nav className="w-full flex flex-row py-5 border-b border-b-[var(--border)]">
        <div className="w-full flex flex-row justify-between max-w-screen-2xl mx-auto px-[60px]">
          <div className="flex flex-row gap-8">
            <Button>Eric Dai</Button>
            <Button>Work</Button>
            <Button>About</Button>
            <Button>Contact</Button>
          </div>
        </div>
      </nav>
      <main className="flex max-w-screen-2xl mx-auto flex-col gap-8 row-start-2 items-center sm:items-start px-[60px]">
        <div className="flex flex-col text-left max-w-[640px] leading-normal gap-6 py-[80px]">
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
          <h2 className="text-2xl font-medium mb-8">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
