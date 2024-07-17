import React from 'react';
import clsx from 'clsx';

import type { ActiveSortType } from '../types';

import styles from './Sort.module.scss';

interface SortProps {
  sortItems: string[];
  activeSort: ActiveSortType;
  handleChangeSort: (sort: string) => () => void;
}

export const Sort: React.FC<SortProps> = ({
  sortItems,
  activeSort,
  handleChangeSort,
}) => {
  return (
    <div className={styles.sort}>
      <p className={styles.label}>
        {activeSort.name}
        <span
          className={styles['order-arrow']}
          style={{
            transform: `rotate(${activeSort.order === 'asc' ? 0 : 180}deg)`,
          }}
        >
          {'↑'}
        </span>
      </p>
      <div className={styles.popup}>
        <ul>
          {sortItems.map((item) => (
            <li
              key={item}
              className={clsx({
                [styles.active]: activeSort.name === item,
              })}
              onClick={handleChangeSort(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
