import React from 'react';
import clsx from 'clsx';

import styles from './Filters.module.scss';

interface FiltersProps {
  filters: string[];
  activeFilter: number;
  handleFilterChange: (index: number) => () => void;
}

export const Filters: React.FC<FiltersProps> = ({
  filters,
  activeFilter,
  handleFilterChange,
}) => {
  return (
    <div className={styles.filters}>
      {filters.map((filter, index) => (
        <div
          key={filter}
          className={clsx(styles['filter-item'], {
            [styles.active]: activeFilter === index,
          })}
          onClick={handleFilterChange(index)}
        >
          <p className={styles.name}>{filter}</p>
        </div>
      ))}
    </div>
  );
};
