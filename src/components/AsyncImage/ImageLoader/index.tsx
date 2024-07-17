import styles from './ImageLoader.module.scss';

export const ImageLoader = () => {
  return (
    <div className={styles.loader}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        role="img"
        aria-hidden="true"
        className={styles['loader-inline-svg']}
      >
        <defs>
          <clipPath id="dotLoaderClip">
            <circle cx="10" cy="10" r="10" />
          </clipPath>
        </defs>
        <g clipPath="url(#dotLoaderClip)">
          <circle r="10" cx="10" cy="10" className={styles['c1']} />
          <circle r="10" cx="10" cy="-10" className={styles['c2']} />
          <circle r="10" cx="30" cy="10" className={styles['c3']} />
          <circle r="10" cx="-10" cy="30" className={styles['c4']} />
          <circle r="10" cx="30" cy="-10" className={styles['c5']} />
        </g>
      </svg>
    </div>
  );
};
