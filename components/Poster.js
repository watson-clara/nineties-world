import React from 'react';
import styles from './Poster.module.css';

const Poster = ({ position = { x: '40%', y: '15%' }, type = 'music', onClick }) => {
  return (
    <div 
      className={styles.poster}
      style={{ 
        left: position.x, 
        top: position.y 
      }}
      onClick={onClick}
      data-testid="poster"
    >
      {type === 'music' && (
        <div className={styles.musicPoster}>
          <div className={styles.posterTitle}>LOVE SONGS</div>
          <div className={styles.posterImage}></div>
          <div className={styles.posterText}>VALENTINE HITS</div>
        </div>
      )}
      
      {type === 'movie' && (
        <div className={styles.moviePoster}>
          <div className={styles.posterTitle}>ROMANCE</div>
          <div className={styles.posterImage}></div>
          <div className={styles.posterText}>VALENTINE MOVIE</div>
        </div>
      )}
      
      {type !== 'music' && type !== 'movie' && (
        <div className={styles.defaultPoster}></div>
      )}
    </div>
  );
};

export default Poster; 