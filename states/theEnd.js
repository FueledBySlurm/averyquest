var theEnd = function(game) {
	var playButton;
}

theEnd.prototype = {
  create: function(){
		this.game.load.image('endScene');
		background = this.game.add.tileSprite(1, 1, 800, 600, 'endScene');
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
