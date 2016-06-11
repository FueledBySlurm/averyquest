var endStory = function(game) {
	var playButton;
}

endStory.prototype = {
  create: function(){
		this.game.load.image('inside');
		background = this.game.add.tileSprite(1, 1, 800, 600, 'inside');

		playerDude = this.game.add.sprite(32, 460, 'hopBig');

		playerIPA = this.game.add.sprite(250, 450, 'queenBig');

		// UNCOMMENT THIS FOR FINAL VERSION
		// this.game.time.events.add(Phaser.Timer.SECOND*6, function() {
		// 	this.playTheGame();
		// },
		// this);
		//REMOVE THIS FOR FINAL VERSION
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