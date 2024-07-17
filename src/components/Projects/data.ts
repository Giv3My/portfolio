import { getAssetUrl } from '@/utils';
import type { Project } from './types';

export const filters = ['All', 'Web', 'Desktop'];

export const sortItems = ['Name', 'Year'];

const projectsImages = getAssetUrl('projects');

export const projects: Project[] = [
  {
    id: 1,
    name: 'Agridera',
    type: 'web',
    year: '2021',
    projectLink: 'https://giv3my.github.io/Agridera/homepage/homepage.html',
    githubLink: 'https://github.com/Giv3My/Agridera',
    thumbnail: projectsImages('agridera/thumbnail.jpg'),
    images: [
      projectsImages('agridera/1.jpg'),
      projectsImages('agridera/2.jpg'),
      projectsImages('agridera/3.jpg'),
      projectsImages('agridera/4.jpg'),
    ],
    tags: [
      {
        name: 'Html',
        bgColor: '#E34C26',
      },
      {
        name: 'Css',
        bgColor: '#1572B6',
      },
      {
        name: 'VueJS',
        bgColor: '#42B883',
      },
    ],
    stack: {
      frontend: ['Html', 'Css', 'VueJS', 'PWA'],
    },
  },
  {
    id: 2,
    name: 'Delivery food',
    type: 'web',
    year: '2021',
    projectLink: 'https://Giv3My.github.io/DeliveryFood',
    githubLink: 'https://github.com/Giv3My/DeliveryFood',
    thumbnail: projectsImages('delivery-food/thumbnail.jpg'),
    images: [
      projectsImages('delivery-food/1.jpg'),
      projectsImages('delivery-food/2.jpg'),
      projectsImages('delivery-food/3.jpg'),
    ],
    tags: [
      {
        name: 'Html',
        bgColor: '#E34C26',
      },
      {
        name: 'Css',
        bgColor: '#1572B6',
      },
      {
        name: 'JavaScript',
        bgColor: '#F7DF1E',
      },
    ],
    stack: {
      frontend: ['Html', 'Css', 'JavaScript'],
    },
  },
  {
    id: 3,
    name: 'React-pizza',
    type: 'web',
    year: '2022',
    projectLink: 'https://react-pizza-hazel.vercel.app',
    githubLink: 'https://github.com/Giv3My/react-pizza-v2',
    thumbnail: projectsImages('react-pizza/thumbnail.jpg'),
    images: [projectsImages('react-pizza/1.jpg'), projectsImages('react-pizza/2.jpg')],
    tags: [
      {
        name: 'Html',
        bgColor: '#E34C26',
      },
      {
        name: 'Scss',
        bgColor: '#CC6699',
      },
      {
        name: 'ReactJS',
        bgColor: '#61DAFB',
      },
      {
        name: 'TypeScript',
        bgColor: '#3178C6',
      },
      {
        name: 'Redux Toolkit',
        bgColor: '#764ABC',
      },
    ],
    stack: {
      frontend: ['Html', 'Scss', 'ReactJS', 'Redux Toolkit'],
    },
  },
  {
    id: 4,
    name: 'Elekta Store',
    type: 'web',
    year: '2022',
    projectLink: 'https://elekta-store.vercel.app',
    githubLink: 'https://github.com/Giv3My/elekta-store',
    thumbnail: projectsImages('elekta-store/thumbnail.jpg'),
    images: [
      projectsImages('elekta-store/1.jpg'),
      projectsImages('elekta-store/2.jpg'),
      projectsImages('elekta-store/3.jpg'),
      projectsImages('elekta-store/4.jpg'),
    ],
    tags: [
      {
        name: 'Html',
        bgColor: '#E34C26',
      },
      {
        name: 'Scss',
        bgColor: '#CC6699',
      },
      {
        name: 'ReactJS',
        bgColor: '#61DAFB',
      },
      {
        name: 'Mui',
        bgColor: '#0081CB',
      },
      {
        name: 'Redux Toolkit',
        bgColor: '#764ABC',
      },
      {
        name: 'Framer Motion',
        bgColor: '#F1618C',
      },
    ],
    stack: {
      frontend: ['Html', 'Scss', 'ReactJS', 'Redux Toolkit'],
      backend: ['ExpressJS', 'JWT-auth', 'MongoDB', 'Nodemailer'],
    },
  },
  {
    id: 5,
    name: 'Movie app',
    type: 'desktop',
    year: '2023',
    githubLink: 'https://github.com/Giv3My/WPF_MovieApp',
    thumbnail: projectsImages('movie-app/1.jpg'),
    images: [
      projectsImages('movie-app/1.jpg'),
      projectsImages('movie-app/2.jpg'),
      projectsImages('movie-app/3.jpg'),
    ],
    tags: [
      {
        name: 'C#',
        bgColor: '#68217A',
      },
      {
        name: 'Wpf',
        bgColor: '#5C2D91',
      },
    ],
    stack: {
      frontend: ['C#', 'WPF'],
    },
  },
];
