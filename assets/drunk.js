var Drunk = function(game) {
  this.game = game;
  var drunkPercent;
  isAlive = true;
  drunkThreshold = 90;
}

Drunk.prototype = {
  makeBar: function(game){
    var barConfig = {
      x: 650,
      y: 30,
      bg: {
        color: '#A7A9AB'
      },
      bar: {
        color: '#D6DF23'
      },
      isFixedToCamera: true
    };
    drunkPercent = 20;
    drunkBar = new HealthBar(game, barConfig);
    drunkBar.setPercent(drunkPercent);
    drunkMeterLabel = game.add.text(530, 20,'Drunk Meter', { font: '15px Arial', fill: '#2F6CD6' });
    drunkMeterLabel.fixedToCamera = true
    this.drunkDecay(game);
  },
  drunkDecay: function(game) {
    game.time.events.loop(Phaser.Timer.SECOND, function() {
      this.adjust(-2);
    },
    this);
  },

  getNormalControlMode: function() {
    if(drunkPercent >= 90) {
      return false;
    }
    else {
      return true;
    }
  },
  adjust: function(num) {
    if(drunkPercent + num < 0 ) {
      drunkPercent = 0;
    }
    else if(drunkPercent + num > 100) {
      drunkPercent = 100;
    }
    else {
      drunkPercent += num;
    }
    drunkBar.setPercent(drunkPercent);
  },
  clear: function() {
    if(drunkPercent === 0)
    {
      player.kill();
      isAlive = false;
    }
    else {
      drunkPercent = 0;
      drunkBar.setPercent(drunkPercent);
    }
  },
  stillAlive: function() {
    return isAlive;
  }
}
