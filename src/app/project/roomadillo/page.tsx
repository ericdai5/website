import ProjectTemplate, { ProjectData } from '@/components/ProjectTemplate';

const projectData: ProjectData = {
  name: 'Roomadillo',
  cover: '/roomadillo/roomadillo-cover.png',
  category: 'Student Subletting Platform',
  header: 'Building for a new short-term housing experience',
  overview:
    "From February to Aug 2024, I worked at Roomadillo helping to design and develop a new experience for finding student subleases and housing. I worked onsite and closely with the founders Manas and David. \n Additionally, during my time at Roomadillo, I was hands on with helping to grow the on-the-ground operations. I've visited more than 300 apartments over the course of my time there and developed an understanding on the user needs that shaped my design. My time at Roomadillo involved building out the product and refining ideas with the founders.",
  additionalInfo: [
    {
      title: 'Team',
      value: 'Manas Takalpati, David Hao',
    },
    {
      title: 'Role',
      value: 'Product Designer & Software Engineer',
    },
    {
      title: 'Duration',
      value: 'Feb 2024 - Aug 2024',
    },
  ],
  galleryExhibits: [
    {
      supertext: 'Project 1 🔒',
      title: 'UI Redesign',
      description:
        'I led the UI redesign and engineering for the search, booking, and listing user flows. With the design revamp, I built out a design component system of more than 40 components. Reach out for additional details.',
    },
    {
      supertext: 'Project 2 🔒',
      title: 'Software Engineering',
      description:
        '‍I was the sole design and developer behind the booking form, which users need to fill out to send in their initially request for booking an apartment. I implemented the interface with TypeScript and NextJS, as well as creating an Exclusive Access feature using MongoDB, Stripe API, and Zod validation. Reach out for additional details.',
    },
  ],
};

export default function Project() {
  return <ProjectTemplate projectData={projectData} />;
}
