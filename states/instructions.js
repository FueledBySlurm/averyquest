var instructions = function(game) {
	var playButton;
}

instructions.prototype = {
  create: function(){
		this.game.stage.backgroundColor = '#FFFFFF';
		this.game.load.image('instructions');
		background = this.game.add.tileSprite(1, 1, 800, 600, 'instructions');
		playButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	},
	update: function() {
		if (playButton.isDown)
		{
			this.playTheGame();
		}
	},
	playTheGame: function(){
		this.game.state.start("StartStory");
	}
}
