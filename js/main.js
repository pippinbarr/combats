const DEBUG = false;
const START_SCENE = "prototype";
const SCALE = 5;

let config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scene: [
    Boot, Preloader, Prototype
  ],
  render: {
    antialias: false,
    pixelArt: true,
    antialiasGL: false
  },
  pixelArt: true,
  antialias: false,
  antialiasGL: false,
  physics: {
    default: 'arcade',
    arcade: {
      debug: DEBUG
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.BOTH,
    width: 640,
    height: 480,
  }
};

let game = new Phaser.Game(config);