import { projects } from '../../../assets/projects'

export const publications = [
  {
    title: 'ChoiceMates',
    subtitle: 'Supporting Unfamiliar Online Decision-Making with Multi-Agent Conversational Interactions',
    authors: ['Jeongeon Park', 'Bryan Min', 'Xiaojuan Ma', 'Juho Kim'],
    venue: 'arXiv',
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
    award: '',
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
        link: 'https://doi.org/10.48550/arXiv.2305.11483',
      },
      {
        type: 'Paper',
        link: `${process.env.PUBLIC_URL}/papers/sensecape-arxiv.pdf`,
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