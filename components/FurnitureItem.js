import React, { useState, useEffect } from 'react';
import styles from './FurnitureItem.module.css';

const FurnitureItem = ({ type, position, onClick, characterPosition }) => {
  const [isNearby, setIsNearby] = useState(false);
  
  // Calculate if character is near this item
  useEffect(() => {
    if (!characterPosition) return;
    
    // Get item position from the DOM
    const itemElement = document.getElementById(`furniture-${type}`);
    if (!itemElement) return;
    
    const rect = itemElement.getBoundingClientRect();
    const itemX = rect.left + rect.width/2;
    const itemY = rect.top + rect.height/2;
    
    // Check if character is within interaction distance
    const distance = Math.sqrt(
      Math.pow(characterPosition.x - itemX, 2) + 
      Math.pow(characterPosition.y - itemY, 2)
    );
    
    setIsNearby(distance < 100); // 100px interaction radius
  }, [characterPosition, type]);
  
  const renderFurniture = () => {
    switch(type) {
      case 'bed':
        return <div className={styles.bed}></div>;
      case 'desk':
        return <div className={styles.desk}></div>;
      case 'bookshelf':
        return (
          <div className={styles.bookshelf}>
            <div className={styles.bookshelfShelf}></div>
            <div className={styles.bookshelfShelf}></div>
            <div className={styles.bookshelfShelf}></div>
          </div>
        );
      case 'clock':
        return <div className={styles.clock}>L</div>;
      case 'lamp':
        return (
          <div className={styles.lamp}>
            <div className={styles.lampShade}></div>
          </div>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <div 
      id={`furniture-${type}`}
      className={`${styles.item} ${isNearby ? styles.interactive : ''}`}
      style={{
        top: position.top || 'auto',
        left: position.left || 'auto',
        right: position.right || 'auto',
        bottom: position.bottom || 'auto'
      }}
      onClick={isNearby ? onClick : null}
    >
      {renderFurniture()}
      {isNearby && (
        <div className={styles.interactionHint}>
          Click to interact
        </div>
      )}
    </div>
  );
};

export default FurnitureItem; 