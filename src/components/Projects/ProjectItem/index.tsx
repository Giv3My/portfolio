import React from 'react';
import { motion } from 'framer-motion';

import type { Project } from '../types';

import { Github, Eye } from '@/assets/icons';
import styles from './ProjectItem.module.scss';

interface ProjectItemProps {
  project: Project;
  handleSelectProject: (project: Project) => void;
}

const ProjectItem = React.forwardRef<HTMLDivElement, ProjectItemProps>(
  ({ project, handleSelectProject }, ref) => {
    const onProjectClick = () => {
      handleSelectProject(project);
    };

    return (
      <div ref={ref} className={styles.project}>
        <div className={styles.thumbnail}>
          <img src={project.thumbnail} alt={project.name} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{project.name}</h3>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <p
                key={tag.name}
                style={{
                  color: tag.bgColor,
                  backgroundColor: `${tag.bgColor}33`,
                }}
              >
                {tag.name}
              </p>
            ))}
          </div>
          <p className={styles.year}>{project.year}</p>
        </div>
        <div className={styles.overlay}>
          <div className={styles.icon}>
            <a href={project.githubLink} target="_blank">
              <span>
                <Github width={50} height={50} />
              </span>
            </a>
          </div>
          <div className={styles.icon} onClick={onProjectClick}>
            <span>
              <Eye width={50} height={50} />
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export const MotionProjectItem = motion(ProjectItem, {
  forwardMotionProps: true,
});
