import { getAssetUrl } from '@/utils';

const skillsImages = getAssetUrl('skills');

export const skills = [
  {
    name: 'html',
    src: skillsImages('html.png'),
  },
  {
    name: 'css',
    src: skillsImages('css.png'),
  },
  {
    name: 'scss',
    src: skillsImages('scss.png'),
  },
  {
    name: 'js',
    src: skillsImages('js.png'),
    width: 65,
    height: 65,
  },
  {
    name: 'ts',
    src: skillsImages('ts.png'),
    width: 65,
    height: 65,
  },
  {
    name: 'react',
    src: skillsImages('react.png'),
  },
  {
    name: 'redux',
    src: skillsImages('redux.png'),
  },
  {
    name: 'mui',
    src: skillsImages('mui.png'),
  },
  {
    name: 'framer',
    src: skillsImages('framer.png'),
  },
  {
    name: 'node',
    src: skillsImages('node-js.png'),
  },
  {
    name: 'express',
    src: skillsImages('express.png'),
  },
  {
    name: 'nest',
    src: skillsImages('nest.png'),
  },
  {
    name: 'mongodb',
    src: skillsImages('mongodb.png'),
    width: 40,
    height: 40,
  },
  {
    name: 'postgre',
    src: skillsImages('postgre.png'),
    width: 63,
    height: 63,
  },
  {
    name: 'graphql',
    src: skillsImages('graphql.png'),
  },
];
