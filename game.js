/* global Phaser */

const config = {
    type : Phaser.AUTO,
    width: 256,
    height: 244,
    backgroundColor: '#049cd8',
    parent: 'game',
    scene:{
        preload, // se ejecuta para cargar recrusos
        create, // se ejecuta cuando el juego comienza
        update // se ejecuta en cada frame
    }
}

new Phaser.Game(config)

function preload() {
    this.load.image(
        'cloud1',
        'assets/scenery/overworld/cloud1.png'
    )

    this.load.image(
        'floorbricks',
        'assets/scenery/overworld/floorbricks.png'
    )

    this.load.spritesheet(
        'mario',
        'assets/entities/mario.png',
        { frameWidth : 18, frameHeight : 16 } 
    )
    
}

function create() {
    //image(x,y,id-del-asset)
    this.add.image(100, 50, 'cloud1')
        .setOrigin(0, 0)
        .setScale(0.15)

    this.add.tileSprite(0, config.height -32, config.width, 32,
         'floorbricks' )
         .setOrigin(0, 0)

    this.add.sprite(50, 210, 'mario')
        .setOrigin(0,1)
}

function update() {
    
}