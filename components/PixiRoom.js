import React, { useEffect, useRef, useState } from 'react';
import styles from './PixiRoom.module.css';

const PixiRoom = () => {
  const pixiContainer = useRef(null);
  const [message, setMessage] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [loadAttempts, setLoadAttempts] = useState(0);
  
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;
    
    // Try to load PIXI with a delay and retry mechanism
    const loadPixi = () => {
      if (window.PIXI) {
        initializePixi(window.PIXI);
      } else if (loadAttempts < 5) {
        // Retry up to 5 times with increasing delay
        setTimeout(() => {
          setLoadAttempts(prev => prev + 1);
        }, 1000 * (loadAttempts + 1));
      } else {
        setError("PixiJS not loaded from CDN after multiple attempts");
      }
    };
    
    loadPixi();
  }, [loadAttempts]);
  
  const initializePixi = (PIXI) => {
    try {
      // Create application
      const app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0xd4b8e8,
        resolution: window.devicePixelRatio || 1,
      });
      
      // Add to DOM
      if (pixiContainer.current) {
        pixiContainer.current.appendChild(app.view);
        setIsLoaded(true);
        
        // Setup room
        const room = createRoom(app, PIXI);
        createFurniture(app, PIXI, room);
        createCharacter(app, PIXI, room);
        createInstructions(app, PIXI, room);
      }
      
      // Cleanup
      return () => {
        app.destroy(true, true);
      };
    } catch (err) {
      console.error("Failed to initialize PixiJS:", err);
      setError(err.message);
    }
  };
  
  const createRoom = (app, PIXI) => {
    // Create room background
    const room = new PIXI.Container();
    app.stage.addChild(room);
    
    // Add wooden border
    const border = new PIXI.Graphics();
    border.lineStyle(16, 0x8b5a2b);
    border.drawRect(0, 0, 800, 600);
    room.addChild(border);
    
    // Add floor with grid pattern
    const floor = new PIXI.Graphics();
    floor.beginFill(0xd4b8e8);
    floor.drawRect(0, 240, 800, 360); // Bottom 60%
    room.addChild(floor);
    
    // Add grid lines to floor
    const gridLines = new PIXI.Graphics();
    gridLines.lineStyle(1, 0x000000, 0.05);
    
    // Horizontal grid lines
    for (let y = 240; y <= 600; y += 20) {
      gridLines.moveTo(0, y);
      gridLines.lineTo(800, y);
    }
    
    // Vertical grid lines
    for (let x = 0; x <= 800; x += 20) {
      gridLines.moveTo(x, 240);
      gridLines.lineTo(x, 600);
    }
    
    room.addChild(gridLines);
    
    // Add title
    const title = new PIXI.Text('♥ KAWAII PIXEL ROOM ♥', {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: 24,
      fill: 0x555555,
      align: 'center',
      stroke: 0xff9eb5,
      strokeThickness: 2
    });
    
    title.anchor.set(0.5);
    title.position.set(400, 60);
    room.addChild(title);
    
    return room;
  };
  
  const createFurniture = (app, PIXI, container) => {
    // Create bed
    const bed = new PIXI.Graphics();
    bed.beginFill(0xffb6c1); // Pink
    bed.lineStyle(3, 0x8b5a2b); // Brown border
    bed.drawRect(0, 0, 160, 180);
    bed.endFill();
    bed.position.set(400, 400);
    bed.pivot.set(80, 90);
    bed.interactive = true;
    bed.buttonMode = true;
    bed.on('pointerdown', () => {
      showMessage('bed', "My comfy bed with heart-shaped pillows! (｡♥‿♥｡)");
    });
    container.addChild(bed);
    
    // Create desk
    const desk = new PIXI.Graphics();
    desk.beginFill(0xb08968); // Brown
    desk.lineStyle(3, 0x8b5a2b); // Darker brown border
    desk.drawRect(0, 0, 120, 80);
    desk.endFill();
    desk.position.set(150, 500);
    desk.interactive = true;
    desk.buttonMode = true;
    desk.on('pointerdown', () => {
      showMessage('desk', "Where I write my kawaii stories! (●´ω｀●)");
    });
    container.addChild(desk);
    
    // Create bookshelf
    const bookshelf = new PIXI.Graphics();
    bookshelf.beginFill(0xb08968); // Brown
    bookshelf.lineStyle(3, 0x8b5a2b); // Darker brown border
    bookshelf.drawRect(0, 0, 100, 140);
    bookshelf.endFill();
    
    // Add shelves
    for (let i = 1; i < 4; i++) {
      const shelf = new PIXI.Graphics();
      shelf.beginFill(0x8b5a2b);
      shelf.drawRect(0, 0, 100, 4);
      shelf.position.set(0, i * 35);
      bookshelf.addChild(shelf);
    }
    
    bookshelf.position.set(650, 500);
    bookshelf.interactive = true;
    bookshelf.buttonMode = true;
    bookshelf.on('pointerdown', () => {
      showMessage('bookshelf', "Full of manga and cute stories! (⌒‿⌒)");
    });
    container.addChild(bookshelf);
    
    // Create clock
    const clock = new PIXI.Graphics();
    clock.beginFill(0xffffff); // White
    clock.lineStyle(5, 0xff9eb5); // Pink border
    clock.drawCircle(0, 0, 30);
    clock.endFill();
    
    const clockText = new PIXI.Text('L', {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: 16,
      fill: 0x555555
    });
    clockText.anchor.set(0.5);
    clock.addChild(clockText);
    
    clock.position.set(400, 150);
    clock.interactive = true;
    clock.buttonMode = true;
    clock.on('pointerdown', () => {
      showMessage('clock', "It's always time for love in my kawaii room! (´｡• ᵕ •｡`)");
    });
    container.addChild(clock);
    
    // Create lamp
    const lamp = new PIXI.Container();
    
    const lampBase = new PIXI.Graphics();
    lampBase.beginFill(0xff9eb5); // Pink
    lampBase.lineStyle(3, 0x8b5a2b); // Brown border
    lampBase.drawRect(0, 0, 40, 80);
    lampBase.endFill();
    lamp.addChild(lampBase);
    
    const lampShade = new PIXI.Graphics();
    lampShade.beginFill(0xffb6c1); // Light pink
    lampShade.lineStyle(3, 0x8b5a2b); // Brown border
    lampShade.drawEllipse(0, 0, 30, 20);
    lampShade.endFill();
    lampShade.position.set(20, -20);
    lamp.addChild(lampShade);
    
    lamp.position.set(200, 150);
    lamp.interactive = true;
    lamp.buttonMode = true;
    lamp.on('pointerdown', () => {
      showMessage('lamp', "My pink lamp keeps the room cozy! (✿◠‿◠)");
    });
    container.addChild(lamp);
  };
  
  const createCharacter = (app, PIXI, container) => {
    // Create character sprite
    const character = new PIXI.Container();
    
    // Character body
    const body = new PIXI.Graphics();
    body.beginFill(0xff9eb5); // Pink
    body.lineStyle(2, 0xff7a9e); // Darker pink border
    body.drawCircle(0, 0, 16);
    body.endFill();
    
    // Character eyes
    const eye = new PIXI.Graphics();
    eye.beginFill(0xffffff);
    eye.drawCircle(-4, -4, 4);
    eye.endFill();
    
    // Character mouth
    const mouth = new PIXI.Graphics();
    mouth.beginFill(0xff5c8d);
    mouth.drawEllipse(0, 6, 5, 2);
    mouth.endFill();
    
    character.addChild(body);
    character.addChild(eye);
    character.addChild(mouth);
    
    character.position.set(400, 300);
    container.addChild(character);
    
    // Handle keyboard movement
    const keys = {};
    
    window.addEventListener('keydown', (e) => {
      keys[e.key] = true;
    });
    
    window.addEventListener('keyup', (e) => {
      keys[e.key] = false;
    });
    
    // Animation loop for character movement
    app.ticker.add(() => {
      const speed = 3;
      
      if (keys['ArrowUp'] && character.y > 100) {
        character.y -= speed;
        eye.y = -6; // Move eyes up when looking up
      }
      
      if (keys['ArrowDown'] && character.y < 550) {
        character.y += speed;
        eye.y = -2; // Move eyes down when looking down
      }
      
      if (keys['ArrowLeft'] && character.x > 50) {
        character.x -= speed;
        eye.x = -6; // Move eyes left when looking left
      }
      
      if (keys['ArrowRight'] && character.x < 750) {
        character.x += speed;
        eye.x = -2; // Move eyes right when looking right
      }
      
      // Reset eye position if not moving
      if (!keys['ArrowUp'] && !keys['ArrowDown'] && !keys['ArrowLeft'] && !keys['ArrowRight']) {
        eye.x = -4;
        eye.y = -4;
      }
    });
  };
  
  const createInstructions = (app, PIXI, container) => {
    const instructions = new PIXI.Text('Use arrow keys to move. Click on items to interact.', {
      fontFamily: '"Press Start 2P", monospace',
      fontSize: 12,
      fill: 0x555555,
      align: 'center',
    });
    
    instructions.anchor.set(0.5, 0);
    instructions.position.set(400, 560);
    container.addChild(instructions);
  };
  
  const showMessage = (item, text) => {
    setMessage({ item, text });
    setTimeout(() => setMessage(null), 3000);
  };
  
  if (error) {
    return (
      <div className={styles.fallbackContainer}>
        <h1 className={styles.fallbackTitle}>♥ KAWAII PIXEL ROOM ♥</h1>
        <div className={styles.fallbackRoom}>
          <div className={styles.fallbackCharacter}></div>
          <div className={styles.fallbackMessage}>
            <p>Sorry, couldn't load the pixel room.</p>
            <p>Error: {error}</p>
            <button 
              className={styles.retryButton}
              onClick={() => {
                setError(null);
                setLoadAttempts(0);
              }}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className={styles.pixiContainer}>
      <div ref={pixiContainer}></div>
      {!isLoaded && <div className={styles.loading}>Loading...</div>}
      
      {message && (
        <div className={styles.messageBubble}>
          <div className={styles.messageBubbleHeader}>
            ♥ {message.item.toUpperCase()}.EXE ♥
          </div>
          <div className={styles.messageBubbleContent}>
            {message.text}
          </div>
        </div>
      )}
    </div>
  );
};

export default PixiRoom; 