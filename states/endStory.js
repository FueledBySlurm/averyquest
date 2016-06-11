var endStory = function(game) {
	var playButton;
}

endStory.prototype = {
  create: function(){
		this.game.load.image('inside');
		background = this.game.add.tileSprite(1, 1, 800, 600, 'inside');

		playerDude = this.game.add.sprite(32, 475, 'dude');
		playerDude.scale.x=2;
		playerDude.scale.y=2;
		//this.game.physics.enable(playerDude, Phaser.Physics.ARCADE);
		playerDude.animations.add('right', [5, 6, 7, 8], 10, true);
		this.game.time.events.add(0001, function() {
			playerDude.animations.play('right');
			playerDude.animations.stop();
		},
		this);

		playerIPA = this.game.add.sprite(250, 470, 'imperialIPA');
		playerIPA.scale.x=2;
		playerIPA.scale.y=2;

		// this.game.time.events.add(Phaser.Timer.SECOND*6, function() {
		// 	this.playTheGame();
		// },
		// this);
		playButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	},
	update: function() {
		if (playButton.isDown)
		{
			this.playTheGame();
		}
	},
	playTheGame: function(){
		this.game.state.start("StartScreen");
	}
}
