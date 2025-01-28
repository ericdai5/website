import ProjectTemplate, { ProjectData } from '@/components/ProjectTemplate';

const projectData: ProjectData = {
  name: 'Nori',
  cover: '/nori/nori-cover.png',
  category: 'LLM-Powered Authoring Tool',
  header: 'Preserving Context and Text-Data Connections in Research Texts',
  overview:
    'This project was developed in Fall 2024 as a final project for CIS 7000 (Interactive Reading), an advanced seminar in human-centered computing at Penn. I built Nori, an augmented reading and authoring interface designed to provide just-in-time overviews of data-table references. Nori leverages large language models (LLMs) to generate color-coded annotations that highlight key insights to bridge the gap between textual references and data tables while ensuring context preservation and fostering human-interface collaboration.',
  additionalInfo: [
    {
      title: 'Role',
      value: 'Designer and Developer, Course Project (Interactive Reading)',
    },
    {
      title: 'Duration',
      value: 'Oct - Dec 2024',
    },
    {
      title: 'Tools',
      value: 'Figma, OpenAI API, React, Next.js',
    },
  ],
  galleryExhibits: [
    {
      title: 'Core Focus',
      description:
        'Nori seeks to address the research space of interfaces for data-intensive texts, such as scientific papers, which often require readers to navigate between the main text and data-table exhibits to understand the insight behind specific references. This form of non-linear traversal in traditional linear reading documents leads to split attention and negative coherence effects due to the physical effort and cognitive load involved in finding and interpreting references. Existing solutions in the space can benefit from more detailed and informative use of visual cues to display different forms of table cell selections from a reference.',
    },
    {
      title: 'Implementation and Findings',
      description:
        'This project involves a deep dive on using OpenAI APIs to aid in generating text-table linkages with fewer inaccuracies and more human-like contextual understanding. Upon the completion of a minimal viable product, I conducted a user study with six participants that indicated users find Nori helpful for understanding references due to its intuitive interface and effective visual cues. However, participants also identified limitations regarding the speed and accuracy of the LLM generated highlights, especially for complex references.',
    },
    {
      title: 'Next Steps',
      description:
        'I am still exploring ways to improve upon the existing system. Future work will focus on enhancing system efficiency and speed, expanding support for diverse table formats and content types—including LaTeX—and refining the LLM’s ability to produce more accurate and contextually relevant annotations. Take a look at my presentation to step through a summary of the project and its features.',
    },
  ],
  buttons: [
    {
      text: 'View presentation',
      link: 'https://www.figma.com/proto/EgYdSyMKGR1Ype1L0CklP7/Nori?page-id=303%3A2&node-id=303-7&viewport=1176%2C418%2C0.11&t=783EQNEu3UGCkwhx-1&scaling=contain&content-scaling=fixed',
    },
  ],
};

export default function Project() {
  return <ProjectTemplate projectData={projectData} />;
}
