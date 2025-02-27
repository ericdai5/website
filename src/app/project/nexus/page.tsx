import ProjectTemplate, { ProjectData } from '@/components/ProjectTemplate';

const projectData: ProjectData = {
  name: 'Nexus',
  cover: '/nexus/nexus-cover.png',
  category: 'Academic Planner Interface',
  header: 'Minimal and frictionless course registration experience',
  overview:
    'Students at Penn often complain about the confusion they experience when navigating Penn InTouch (the old course registration interface) and the inability to find relevant course information when searching and registering for courses in Penn InTouch. I designed Nexus, a new course registration experience that is centralized onto a single page featuring a modernized visual style and intuitive interactions such as responsive schedule visualization.',
  additionalInfo: [
    {
      title: 'Role',
      value: 'Sole Designer, Course Project',
    },
    {
      title: 'Duration',
      value: 'Oct - Nov 2021',
    },
    {
      title: 'Tools',
      value: 'Figma',
    },
  ],
  galleryExhibits: [
    {
      title: 'Streamlining course discovery',
      description:
        "Users seamlessly discover courses through a minimalist search bar and optional filters. Smart indicators highlight missing requirements—like a studio section—and if prerequisites aren't met, they can dive into those classes to learn more and decide whether to enroll first.",
      images: [
        {
          src: '/nexus/nexus-search.png',
          description:
            'Search controls, course status, course filters, fulfillment state, error state, course details, etc.',
        },
      ],
    },
    {
      title: 'Encouraging schedule exploration',
      description:
        'When users tick a lecture checkbox, the schedule updates instantly. They can generate and duplicate multiple mock schedules to explore different setups. After finalizing, they submit course requests. A new “Ranking” panel then appears, letting them drag and reorder each course’s importance—ensuring the system targets their top picks first.',
      images: [
        { src: '/nexus/nexus-plan1.png' },
        {
          src: '/nexus/nexus-plan2.png',
          description:
            'Course cart, schedule visualizer, schedule controls, announcements, course ranking, etc.',
        },
      ],
    },
    {
      title: 'Flexibility after course request submission',
      description:
        'When the user finalizes rankings, a confirmation instantly appears. If any courses are missing, they can revisit the planner, see what made the cut, and add new classes. Once they confirm the updated schedule, the system enrolls them in the newly selected course.',
      images: [
        { src: '/nexus/nexus-official1.png' },
        {
          src: '/nexus/nexus-official2.png',
          description: 'Add courses, drop courses, edit official schedule, download, share, etc.',
        },
      ],
    },
  ],
  buttons: [
    {
      text: 'View full case study',
      link: 'https://www.figma.com/proto/cZcHPGYN9snmfMAOWbEXjZ/Nexus?page-id=334%3A715&node-id=367-7935&viewport=51%2C439%2C0.05&t=WrWqVNmm47xMSzUk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=367%3A7935',
    },
  ],
};

export default function Project() {
  return <ProjectTemplate projectData={projectData} />;
}
