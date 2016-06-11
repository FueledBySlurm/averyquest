var startStory = function(game) {
	var playButton;
}

startStory.prototype = {
  create: function(){
		this.game.load.image('background');
		background = this.game.add.tileSprite(1, 1, 800, 600, 'background');

		map = this.game.add.tilemap('level1');

    map.addTilesetImage('tiles-2');
    map.addTilesetImage('GroundTile');
    map.addTilesetImage('LavaSpikes');
    map.addTilesetImage('StreetSign');
    map.addTilesetImage('RoadTile');
    map.addTilesetImage('Taphouse');
		map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);

		layer = map.createLayer('Tile Layer 1');

		//  Un-comment this on to see the collision tiles
		//layer.debug = true;

		layer.resizeWorld();

		playerDude = this.game.add.sprite(32, 440, 'dude');
    this.game.physics.enable(playerDude, Phaser.Physics.ARCADE);
		playerDude.animations.add('right', [5, 6, 7, 8], 10, true);
		this.game.time.events.add(0001, function() {
			playerDude.animations.play('right');
			playerDude.animations.stop();
		},
		this);

		playerIPA = this.game.add.sprite(100, 435, 'imperialIPA');
    this.game.physics.enable(playerIPA, Phaser.Physics.ARCADE);
		playerIPA.animations.add('right', [5, 6, 7, 8], 10, true);

		this.game.time.events.add(1000, function() {
			chat = this.game.add.sprite(32, 160, 'chat1');
		},
		this);

		this.game.time.events.add(4000, function() {
			chat.kill()
			chat = this.game.add.sprite(32, 160, 'chat2');
		},
		this);

		this.game.time.events.add(7000, function() {
			chat.kill()
			chat = this.game.add.sprite(32, 160, 'chat3');
		},
		this);

		this.game.time.events.add(10000, function() {
			chat.kill()
			chat = this.game.add.sprite(32, 160, 'chat4');
		},
		this);

		this.game.time.events.add(15000, function() {
			chat.kill()
			chat = this.game.add.sprite(32, 160, 'chat5');
		},
		this);

		this.game.time.events.add(18000, function() {
			chat.kill()
			chat = this.game.add.sprite(32, 160, 'chat6');
		},
		this);

		this.game.time.events.add(21000, function() {
			chat.kill()
			chat = this.game.add.sprite(32, 160, 'chat7');
		},
		this);

		playerIPARun = this.game.add.tween(playerIPA);

		playerIPARun.to({x:400}, 2000);
		this.game.time.events.add(Phaser.Timer.SECOND*23, function() {
			playerIPA.animations.play('right');
			playerIPARun.start();
		},
		this);

		this.game.time.events.add(Phaser.Timer.SECOND*24, function() {
			this.playTheGame();
		},
		this);

	},
	update: function() {
		if (playButton.isDown)
		{
			this.playTheGame();
		}
	},
	playTheGame: function(){
		this.game.state.start("PlayGame");
	}
}
