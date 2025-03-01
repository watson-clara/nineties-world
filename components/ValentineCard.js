import React, { useState } from 'react';
import styles from './ValentineCard.module.css';

const ValentineCard = ({ position = { x: 200, y: 200 }, type = 'hearts', onClick }) => {
  const [hover, setHover] = useState(false);
  
  const getCardContent = () => {
    switch(type) {
      case 'hearts':
        return (
          <div className={styles.heartsCard}>
            <div className={styles.pixelHearts}>
              <div className={styles.pixelHeart1}></div>
              <div className={styles.pixelHeart2}></div>
            </div>
            <div className={styles.cardText}>LOVE YOU</div>
          </div>
        );
      case 'calendar':
        return (
          <div className={styles.calendarCard}>
            <div className={styles.pixelCalendar}>
              <div className={styles.calendarTop}></div>
              <div className={styles.calendarBody}>
                <div className={styles.calendarHeart}></div>
              </div>
            </div>
            <div className={styles.cardText}>HAPPY VALENTINES DAY</div>
          </div>
        );
      case 'envelope':
        return (
          <div className={styles.envelopeCard}>
            <div className={styles.pixelEnvelope}>
              <div className={styles.envelopeBody}></div>
              <div className={styles.envelopeFold}></div>
              <div className={styles.envelopeHeart}></div>
            </div>
            <div className={styles.cardText}>BE MY VALENTINE</div>
          </div>
        );
      default:
        return (
          <div className={styles.defaultCard}>
            <div className={styles.pixelHeart}></div>
            <div className={styles.cardText}>PIXEL LOVE</div>
          </div>
        );
    }
  };

  return (
    <div 
      className={`${styles.cardContainer} ${hover ? styles.hover : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px` 
      }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      data-testid="valentine-card"
    >
      {getCardContent()}
    </div>
  );
};

export default ValentineCard; 