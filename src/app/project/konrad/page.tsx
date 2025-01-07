import ProjectTemplate, { ProjectData } from '@/components/ProjectTemplate';

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
      supertext: 'Project 1 🔒',
      title: 'Digital Load Sheet',
      description:
        'I was the sole designer behind the digital load sheet feature for the enterprise-facing platform that allowed warehouse workers to receive updates about the location and details of pallets within a shipping trailer as the trailer is being loaded. Reach out for additional details.',
    },
    {
      supertext: 'Project 2 🔒',
      title: 'Trailer Loading RF Scanner',
      description:
        'I worked closely with three other designers in crafting the experiences of workers using RF (Radio Frequency) Scanners in simplifying the scanning process as well as improving the interface for accessibility. Reach out for additional details.',
    },
  ],
};

export default function Project() {
  return <ProjectTemplate projectData={projectData} />;
}
