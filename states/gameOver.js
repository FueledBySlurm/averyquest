var gameOver = function(game) {
	var playButton;
}

gameOver.prototype = {
  create: function(){
		this.game.load.image('gameOver');
		background = this.game.add.tileSprite(1, 1, 800, 600, 'gameOver');
		restartButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function() {
		if (restartButton.isDown)
		{
			this.playTheGame();
		}
	},
	playTheGame: function(){
		this.game.state.start("PlayGame");
	}
}
