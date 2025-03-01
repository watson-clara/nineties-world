import React, { useState, useEffect } from 'react';
import styles from './Clock.module.css';

const Clock = ({ position, onClick }) => {
  const [time, setTime] = useState('L');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours() % 12 || 12;
      const minutes = now.getMinutes();
      setTime(`${hours}:${minutes < 10 ? '0' + minutes : minutes}`);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className={styles.clock}
      style={{ 
        top: position.top || 'auto',
        left: position.left || 'auto',
        right: position.right || 'auto',
        bottom: position.bottom || 'auto'
      }}
      onClick={onClick}
      data-testid="clock"
    >
      <div className={styles.clockFace}>
        {time}
      </div>
    </div>
  );
};

export default Clock; 