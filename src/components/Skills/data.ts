import { getAssetUrl } from '@/utils';

const skillsImages = getAssetUrl('skills');

export const skillCategories = [
  {
    name: 'Languages',
    skills: [
      {
        name: 'html',
        src: skillsImages('html.png'),
        link: 'https://www.w3.org/html',
      },
      {
        name: 'js',
        src: skillsImages('js.png'),
        link: 'https://www.javascript.com',
        width: 70,
        height: 70,
      },
      {
        name: 'ts',
        src: skillsImages('ts.png'),
        link: 'https://www.typescriptlang.org',
        width: 70,
        height: 70,
      },
    ],
  },
  {
    name: 'Libraries',
    skills: [
      {
        name: 'react',
        src: skillsImages('react.png'),
        link: 'https://react.dev',
      },
      {
        name: 'react-router',
        src: skillsImages('react-router.png'),
        link: 'https://reactrouter.com/en/main',
      },
    ],
  },
  {
    name: 'Frameworks',
    skills: [
      {
        name: 'nextjs',
        src: skillsImages('nextjs.png'),
        link: 'https://nextjs.org',
      },
    ],
  },
  {
    name: 'State Managers',
    skills: [
      {
        name: 'redux',
        src: skillsImages('redux.png'),
        link: 'https://redux.js.org',
      },
      {
        name: 'zustand',
        src: skillsImages('zustand.png'),
        link: 'https://zustand-demo.pmnd.rs',
      },
    ],
  },
  {
    name: 'Styling',
    skills: [
      {
        name: 'css',
        src: skillsImages('css.png'),
        link: 'https://www.w3.org/Style/CSS',
      },
      {
        name: 'scss',
        src: skillsImages('scss.png'),
        link: 'https://sass-lang.com',
      },
      {
        name: 'tailwind',
        src: skillsImages('tailwind.png'),
        link: 'https://v2.tailwindcss.com',
        width: 90,
        height: 90,
      },
      {
        name: 'mui',
        src: skillsImages('mui.png'),
        link: 'https://mui.com',
      },
      {
        name: 'shadcn/ui',
        src: skillsImages('shadcn.png'),
        link: 'https://ui.shadcn.com',
      },
    ],
  },
  {
    name: 'Animations',
    skills: [
      {
        name: 'framer-motion',
        src: skillsImages('framer-motion.png'),
        link: 'https://www.framer.com/motion',
      },
    ],
  },
  {
    name: 'Build Tools',
    skills: [
      {
        name: 'webpack',
        src: skillsImages('webpack.png'),
        link: 'https://webpack.js.org',
        width: 80,
        height: 80,
      },
      {
        name: 'vite',
        src: skillsImages('vite.png'),
        link: 'https://vitejs.dev',
        width: 80,
        height: 80,
      },
    ],
  },
  {
    name: 'Back-end Development',
    skills: [
      {
        name: 'node',
        src: skillsImages('node-js.png'),
        link: 'https://nodejs.org',
        width: 65,
        height: 65,
      },
      {
        name: 'express',
        src: skillsImages('express.png'),
        link: 'https://expressjs.com',
        width: 65,
        height: 65,
      },
      {
        name: 'nest',
        src: skillsImages('nest.png'),
        link: 'https://nestjs.com',
      },
      {
        name: 'jwt',
        src: skillsImages('jwt.png'),
        link: 'https://jwt.io',
      },
      {
        name: 'graphql',
        src: skillsImages('graphql.png'),
        link: 'https://graphql.org',
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'mongodb',
        src: skillsImages('mongodb.png'),
        link: 'https://www.mongodb.com/docs',
        width: 35,
        height: 35,
      },
      {
        name: 'postgre',
        src: skillsImages('postgre.png'),
        link: 'https://www.postgresql.org',
        width: 60,
        height: 60,
      },
      {
        name: 'prisma',
        src: skillsImages('prisma.png'),
        link: 'https://www.prisma.io',
      },
      {
        name: 'typeorm',
        src: skillsImages('typeorm.png'),
        link: 'https://typeorm.io',
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'docker',
        src: skillsImages('docker.png'),
        link: 'https://www.docker.com',
      },
    ],
  },
];
