var playGame = function(game) {
  var map;
  var tileset;
  var layer;
  var player;
  facing = 'left';
  jumpTimer = 0;
  var cursors;
  var jumpButton;
  var background;
  var drunk;
  backgrounds = []
  gameWidth = 800;
  gameHeight = 600;
  drunkThreshold = 90;
  normalControls = true;

  averyCoins = 0;
  coorsCanDensity = 10;
  averyCanDesity = 6;
  averyCoinDesity = 3;
}

playGame.prototype = {
  create: function(){
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.game.stage.backgroundColor = '#000000';

    var backgroundoffset = -15
    for (i = 0; i < 5; i++) {
      backgrounds[i] = this.game.add.tileSprite(backgroundoffset, 0, 2400, gameWidth, 'background');
      backgroundoffset = backgroundoffset + 2400
    }
    backgrounds[1].fixedToCamera = false;

    map = this.game.add.tilemap('level1');

    map.addTilesetImage('tiles-2');
    map.addTilesetImage('GroundTile');
    map.addTilesetImage('LavaSpikes');

    map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);

    layer = map.createLayer('Tile Layer 1');

    //  Un-comment this on to see the collision tiles
    //layer.debug = true;

    layer.resizeWorld();

    this.game.physics.arcade.gravity.y = 250;

    //Add the Drunk meter
    drunk = new Drunk();
    drunk.makeBar(this.game);

    player = this.game.add.sprite(32, 32, 'dude');
    this.game.physics.enable(player, Phaser.Physics.ARCADE);

    player.body.bounce.y = 0.2;
    player.body.collideWorldBounds = false;
    player.body.setSize(20, 32, 5, 16);

    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('turn', [4], 20, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);


    this.game.camera.follow(player);

    cursors = this.game.input.keyboard.createCursorKeys();
    jumpButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    scoreString = 'Avery Coins: ';
    scoreText = this.game.add.text(10, 10, scoreString + averyCoins, { font: '25px Arial', fill: '#000' });
    scoreText.fixedToCamera = true

    messageString = '';
    scoreText = this.game.add.text(10, 10, messageString, { font: '25px Arial', fill: '#000' });
    scoreText.fixedToCamera = true

    addAveryCoins(this.game)
    addAveryBeers(this.game)
    addBadBeers(this.game)
  },
  update: function() {
    if(!drunk.stillAlive() || player.body.top > 790) {
      this.game.state.start("StartScreen");
    }
    this.game.physics.arcade.collide(player, layer);
    this.game.physics.arcade.collide(averyCoin, layer);
    this.game.physics.arcade.collide(averyBeer, layer);
    this.game.physics.arcade.collide(badBeer, layer);
    this.game.physics.arcade.overlap(player, averyCoin, this.collectCoin, null, this);
    this.game.physics.arcade.overlap(player, averyBeer, this.collectBeer, null, this);
    this.game.physics.arcade.overlap(player, badBeer, this.collideBadBeer, null, this);

    player.body.velocity.x = 0;

    normalControls = drunk.getNormalControlMode();

    if (cursors.left.isDown)
    {
      if(normalControls)
      player.body.velocity.x = -150;
      else
      player.body.velocity.x = 150;

      if (facing != 'left')
      {
        player.animations.play('left');
        facing = 'left';
      }
    }
    else if (cursors.right.isDown)
    {
      if(normalControls)
      player.body.velocity.x = 150;
      else
      player.body.velocity.x = -150;

      if (facing != 'right')
      {
        player.animations.play('right');
        facing = 'right';
      }
    }
    else
    {
      if (facing != 'idle')
      {
        player.animations.stop();

        if (facing == 'left')
        {
          player.frame = 0;
        }
        else
        {
          player.frame = 5;
        }

        facing = 'idle';
      }
    }

    if (jumpButton.isDown && player.body.onFloor() && this.game.time.now > jumpTimer)
    {
      player.body.velocity.y = -250;
      jumpTimer = this.game.time.now + 750;
    }
  },
  render: function() {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

  },
  collectCoin: function(player, star) {
    collectAveryCoin(star);
  },
  collideBadBeer: function(player, beer) {
    hitBadBeer(beer, drunk);
  },
  collectBeer: function(player, beer) {
    collectAveryBeer(beer, drunk);
  }
}
