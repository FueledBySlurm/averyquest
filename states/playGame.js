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
  var drunkPercent;
  backgrounds = []
  gameWidth = 800;
  gameHeight = 600;
  drunkThreshold = 90;
  normalControls = true;

  averyCoins = 0;
  coorsCanDensity = 10;
  averyCanDesity = 8;
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
    drunkBar = new HealthBar(this.game, barConfig);
    drunkBar.setPercent(drunkPercent);

    this.drunkDecay();

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
    scoreText = this.game.add.text(10, 10, scoreString + averyCoins, { font: '34px Arial', fill: '#fff' });
    scoreText.fixedToCamera = true

    addAveryCoins(this.game)
    addAveryBeers(this.game)
    addBadBeers(this.game)
  },
  update: function() {
    this.game.physics.arcade.collide(player, layer);
    this.game.physics.arcade.collide(averyCoin, layer);
    this.game.physics.arcade.collide(averyBeer, layer);
    this.game.physics.arcade.collide(badBeer, layer);
    this.game.physics.arcade.overlap(player, averyCoin, collectAveryCoin, null, this);
    this.game.physics.arcade.overlap(player, averyBeer, collectAveryBeer, null, this);
    this.game.physics.arcade.overlap(player, badBeer, hitBadBeer, null, this);

    player.body.velocity.x = 0;

    if(drunkPercent >= 90) {
      normalControls = false;
    }

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
  drunkDecay: function() {
    this.game.time.events.loop(Phaser.Timer.SECOND, function() {
      drunkPercent = drunkPercent - 1;
      drunkBar.setPercent(drunkPercent);
    },
    this);
  },
  render: function() {

    // game.debug.text(game.time.physicsElapsed, 32, 32);
    // game.debug.body(player);
    // game.debug.bodyInfo(player, 16, 24);

  }
}
