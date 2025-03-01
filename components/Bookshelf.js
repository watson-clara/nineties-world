import React from 'react';
import styles from './Bookshelf.module.css';

const Bookshelf = ({ position }) => {
  return (
    <div 
      className={styles.bookshelf}
      style={{ 
        top: position.top || 'auto',
        left: position.left || 'auto',
        right: position.right || 'auto',
        bottom: position.bottom || 'auto'
      }}
      data-testid="bookshelf"
    >
      <div className={styles.shelfDivider1}></div>
      <div className={styles.shelfDivider2}></div>
      
      {/* Top shelf books */}
      <div className={styles.book} style={{ top: '5px', left: '10px' }}></div>
      <div className={styles.book2} style={{ top: '5px', left: '25px' }}></div>
      <div className={styles.book3} style={{ top: '5px', left: '40px' }}></div>
      <div className={styles.book} style={{ top: '5px', left: '55px' }}></div>
      <div className={styles.book2} style={{ top: '5px', left: '70px' }}></div>
      
      {/* Middle shelf books */}
      <div className={styles.book3} style={{ top: '45px', left: '15px' }}></div>
      <div className={styles.book} style={{ top: '45px', left: '30px' }}></div>
      <div className={styles.book2} style={{ top: '45px', left: '45px' }}></div>
      <div className={styles.book3} style={{ top: '45px', left: '60px' }}></div>
      <div className={styles.book} style={{ top: '45px', left: '75px' }}></div>
      
      {/* Bottom shelf books */}
      <div className={styles.book2} style={{ top: '85px', left: '10px' }}></div>
      <div className={styles.book3} style={{ top: '85px', left: '25px' }}></div>
      <div className={styles.book} style={{ top: '85px', left: '40px' }}></div>
      <div className={styles.book2} style={{ top: '85px', left: '55px' }}></div>
      <div className={styles.book3} style={{ top: '85px', left: '70px' }}></div>
      
      <div className={styles.skull}></div>
    </div>
  );
};

export default Bookshelf; 