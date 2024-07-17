import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useAppContext } from '@/context';
import { useFilter, useSort } from '@/hooks';
import { fadeIn, textFadeFromTop, zoomIn } from '@/utils/motion/variants';
import { getInViewAnimationProps } from '@/utils/motion/utils';
import { projects as projectsData, filters, sortItems } from './data';
import type { ActiveSortType, Project } from './types';

import { Filters } from './Filters';
import { Sort } from './Sort';
import { MotionProjectItem } from './ProjectItem';
import styles from './Projects.module.scss';

export const Projects: React.FC = () => {
  const { handleSelectProject } = useAppContext();
  const [activeFilter, setActiveFilter] = React.useState(0);
  const [activeSort, setActiveSort] = React.useState<ActiveSortType>({
    name: sortItems[0],
    order: 'asc',
  });

  const filteredProjects = useFilter(filters, projectsData, activeFilter, 'type');

  const sortedProjects = useSort(
    filteredProjects,
    activeSort.name.toLowerCase() as keyof Project,
    activeSort.order
  );

  const handleFilterChange = (index: number) => () => {
    setActiveFilter(index);
  };

  const handleChangeSort = (name: string) => () => {
    if (name === activeSort.name) {
      setActiveSort((prev) => ({
        ...prev,
        order: prev.order === 'desc' ? 'asc' : 'desc',
      }));

      return;
    }

    setActiveSort({
      name,
      order: 'asc',
    });
  };

  return (
    <motion.section className={styles.projects} id="projects" data-section-id="2">
      <motion.h2 className={styles.title} {...getInViewAnimationProps(textFadeFromTop)}>
        My Projects
      </motion.h2>
      <motion.div className={styles.controls} {...getInViewAnimationProps(fadeIn)}>
        <Filters
          filters={filters}
          activeFilter={activeFilter}
          handleFilterChange={handleFilterChange}
        />
        <Sort
          sortItems={sortItems}
          activeSort={activeSort}
          handleChangeSort={handleChangeSort}
        />
      </motion.div>
      <div className={styles['projects-list']}>
        <AnimatePresence mode="popLayout">
          {sortedProjects.map((project, index) => {
            const variants = zoomIn(0.9, { delay: index * 0.25 });

            return (
              <MotionProjectItem
                key={project.id}
                project={project}
                handleSelectProject={handleSelectProject}
                {...getInViewAnimationProps(variants, {
                  layout: 'preserve-aspect',
                  exit: { ...variants.hidden },
                  viewport: {
                    once: true,
                    amount: 0.2,
                  },
                })}
              />
            );
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
