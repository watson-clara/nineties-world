import React from 'react';
import styles from './Room.module.css';

const Room = ({ children }) => {
  return (
    <div className={styles.roomContainer}>
      <div className={styles.room}>
        {children}
      </div>
    </div>
  );
};

export default Room; 