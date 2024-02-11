import { projects } from '../../../assets/projects'

export const publications = [
  {
    title: 'Luminate',
    subtitle: 'Structured Generation and Exploration of Design Space with Large Language Models for Human-AI Co-Creation',
    authors: ['Sangho Suh', 'Meng Chen', 'Bryan Min', 'Toby Jia-Jun Li', 'Haijun Xia'],
    venue: 'CHI 2024',
    resources: [
      {
        type: 'DOI',
        link: 'https://doi.org/10.48550/arXiv.2310.12953',
      },
      {
        type: 'Paper',
        link: `${process.env.PUBLIC_URL}/papers/luminate-arxiv.pdf`,
      },
    ],
    thumbnail: projects.Luminate,
    award: '',
    note: ''
  },
  {
    title: 'ChoiceMates',
    subtitle: 'Supporting Unfamiliar Online Decision-Making with Multi-Agent Conversational Interactions',
    authors: ['Jeongeon Park', 'Bryan Min', 'Xiaojuan Ma', 'Juho Kim'],
    venue: 'arXiv (October 2023)',
    resources: [
      {
        type: 'DOI',
        link: 'https://doi.org/10.48550/arXiv.2310.01331',
      },
      {
        type: 'Paper',
        link: `${process.env.PUBLIC_URL}/papers/choicemates-arxiv.pdf`,
      },
    ],
    thumbnail: projects.ChoiceMates,
    award: '',
    note: ''
  },
  {
    title: 'Demonstration of Masonview',
    subtitle: 'Content-Driven Viewport Management',
    authors: ['Bryan Min', 'Matthew T Beaudouin-Lafon', 'Sangho Suh', 'Haijun Xia'],
    venue: 'UIST 2023 Demos',
    resources: [
      {
        type: 'DOI',
        link: 'https://doi.org/10.1145/3586182.3615827',
      },
      {
        type: 'Paper',
        link: `${process.env.PUBLIC_URL}/papers/masonview-demo-uist23.pdf`,
      },
      {
        type: 'Video',
        link: 'https://www.youtube.com/watch?v=HwHb02fxe5w&t=7s',
      },
      {
        type: 'Website',
        link: 'https://creativity.ucsd.edu/masonview',
      },
      {
        type: 'Twitter',
        link: 'https://x.com/bdhmin/status/1710326548857811044?s=20',
      },
    ],
    thumbnail: projects.Masonview,
    award: 'Best Demo Honorable Mention',
    note: ''
  },
  {
    title: 'Sensecape',
    subtitle: 'Enabling Multilevel Exploration and Sensemaking with Large Language Models',
    authors: ['Sangho Suh', 'Bryan Min', 'Srishti Palani', 'Haijun Xia'],
    venue: 'UIST 2023',
    resources: [
      {
        type: 'DOI',
        link: 'https://doi.org/10.1145/3586183.3606756',
      },
      {
        type: 'Paper',
        link: `${process.env.PUBLIC_URL}/papers/sensecape.pdf`,
      },
      {
        type: 'Video',
        link: 'https://www.youtube.com/watch?v=MIfhunAwZew&t=146s',
      },
      {
        type: 'Preview',
        link: 'https://www.youtube.com/watch?v=X3cpRVGuC2w',
      },
      {
        type: 'Website',
        link: 'https://creativity.ucsd.edu/ai',
      },
      {
        type: 'Twitter',
        link: 'https://twitter.com/HaijunXia/status/1646919380704559104?s=20',
      },
    ],
    thumbnail: projects.Sensecape,
    award: '',
    note: ''
  }
]