var preload = function(game) {}

preload.prototype = {
  preload: function(){
		this.game.load.tilemap('level1', 'assets/level.json', null, Phaser.Tilemap.TILED_JSON);
		this.game.load.image('tiles-2', 'assets/Tile.png');
		this.game.load.image('GroundTile', 'assets/GroundTile.png');
		this.game.load.image('LavaSpikes', 'assets/LavaSpikes.png');
		this.game.load.image('RoadTile', 'assets/RoadTile.png');
		this.game.load.image('StreetSign', 'assets/StreetSign.png');
		this.game.load.image('Taphouse', 'assets/Taphouse.png');
		this.game.load.spritesheet('dude', 'assets/CheadleSprite.png', 50, 60);
		this.game.load.spritesheet('imperialIPA', 'assets/ImperialIPASprite.png', 50, 70);
		this.game.load.spritesheet('coorsCan', 'assets/ZoorsCan.png', 50, 100);
		this.game.load.image('averyCoin', 'assets/AveryCoin.png');
		this.game.load.image('starBig', 'assets/games/starstruck/star2.png');
		this.game.load.image('background', 'assets/BG.png');
		this.game.load.image('startScreen', 'assets/TitleScreen.png');
		this.game.load.image('gameOver', 'assets/DeathScreen.png');
		this.game.load.image('inside', 'assets/Inside.png');
		this.game.load.image('hopBig', 'assets/Hopbig.png');
		this.game.load.image('queenBig', 'assets/Queenbig.png');
		this.game.load.image('instructions', 'assets/INSTRUCTIONS.png');
		this.game.load.image('chat1', 'assets/Chat1.png');
		this.game.load.image('chat2', 'assets/Chat2.png');
		this.game.load.image('chat3', 'assets/Chat3.png');
		this.game.load.image('chat4', 'assets/Chat4.png');
		this.game.load.image('chat5', 'assets/Chat5.png');
		this.game.load.image('chat6', 'assets/Chat6.png');
		this.game.load.image('chat7', 'assets/Chat7.png');
		this.game.load.image('chat8', 'assets/Chat8.png');
		this.game.load.image('chat9', 'assets/Chat9.png');
		this.game.load.image('endScene', 'assets/EndScene.png');

        for(var i=0; i < tapRoom.beers.list.length; i++){
            this.game.load.image(tapRoom.beers.list[i].id, tapRoom.beers.list[i].image);
        }

	},
	create: function(){
		this.game.state.start("StartScreen");
	}
}
