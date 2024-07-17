import React from 'react';

import { useAppContext } from '@/context';
import type { Project } from '@/components/Projects/types';

import { AsyncImage } from '@/components/AsyncImage';
import styles from './ProjectInfo.module.scss';

export const ProjectInfo: React.FC<{
  selectedProject?: Project | null;
}> = ({}) => {
  const { selectedProject } = useAppContext();

  return (
    <div className={styles['project-info']}>
      <div className={styles.details}>
        <h2 className={styles['project-name']}>{selectedProject?.name}</h2>
        <p className={styles.year}>{selectedProject?.year}</p>
        <div className={styles.links}>
          <a href={selectedProject?.githubLink} target="_blank">
            GitHub
          </a>
          {selectedProject?.projectLink && (
            <a href={selectedProject.projectLink} target="_blank">
              Project
            </a>
          )}
        </div>
        <div className={styles.stack}>
          <p className={styles.title}>Stack</p>
          {selectedProject &&
            Object.values(selectedProject.stack).map((stack, index) => (
              <div key={index} className={styles.part}>
                <p className={styles.name}>{index === 0 ? 'Frontend' : 'Backend'}</p>
                <ul key={index} className={styles.list}>
                  {stack.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className={styles.images}>
        {selectedProject?.images.map((image, index) => (
          <AsyncImage key={index} src={image} alt={`project-image-${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
