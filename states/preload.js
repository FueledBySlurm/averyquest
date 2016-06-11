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
		this.game.load.spritesheet('coorsCan', 'assets/ZoorsCan.png', 50, 100);
		this.game.load.image('averyCoin', 'assets/AveryCoin.png');
		this.game.load.image('starBig', 'assets/games/starstruck/star2.png');
		this.game.load.image('background', 'assets/BG.png');
		this.game.load.image('startScreen', 'assets/TitleScreen.png');

        for(var i=0; i < tapRoom.beers.list.length; i++){
            this.game.load.image(tapRoom.beers.list[i].id, tapRoom.beers.list[i].image);
        }

	},
	create: function(){
		this.game.state.start("StartScreen");
	}
}
