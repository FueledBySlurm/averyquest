var startScreen = function(game) {
	var playButton;
}

startScreen.prototype = {
  create: function(){
		this.game.load.image('startScreen');
		background = this.game.add.tileSprite(1, 1, 800, 600, 'startScreen');
		playButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function() {
		if (playButton.isDown)
		{
			this.playTheGame();
		}
	},
	playTheGame: function(){
		this.game.state.start("Instructions");
	}
}
