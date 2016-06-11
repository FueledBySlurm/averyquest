function addAveryCoins(game){
    averyCoin = game.add.group();
    averyCoin.enableBody = true;
    var currLocation = 0;
    var space = game.width/this.averyCoinDesity
    var fixedLocations = [
        {x:1000,y:100},
        {x:1030,y:100},
        {x:1060,y:100},
        {x:1090,y:100},
    ]
    var addCan = function(x, y){
        var coin = averyCoin.create(x, y, 'averyCoin');
        coin.scale.setTo(.5, .5)
        coin.body.gravity.y = 6;
        coin.body.bounce.y = 0.7 + Math.random() * 0.2;

    }
    for(var i=0; i < fixedLocations.length; i += 1){
        addCan(fixedLocations[i].x, fixedLocations[i].y)
    }
    while(currLocation < game.width){
        currLocation += space
        addCan(currLocation, 100)
    }
}
function collectAveryCoin (player, star) {

    averyCoins += 1;
    scoreText.text = scoreString + averyCoins;
    star.kill();

}

function addAveryBeers(game){
    // for(var i=0; i < )

    // game.load.image('averyBeer', 'https://avery-ipas-apis.s3.amazonaws.com/uploads/beer/label_image/14/desktop2x_1454200635_Joes-Pilsner.png');
    averyBeer = game.add.group();
    averyBeer.enableBody = true;
    var currLocation = 0;
    var space = game.width/this.averyCanDesity
    var fixedLocations = [
        {x:380,y:100},
    ]
    var addCan = function(x, y){
        beerListIndex = Math.floor(Math.random() * tapRoom.beers.list.length)
        // var beer = averyBeer.create(x, y, tapRoom.beers.list[beerListIndex].id);
        var beer = averyBeer.create(x, y, "joe-s-pils");
        beer.scale.setTo(.5, .5)
        beer.body.gravity.y = 6;
        beer.body.bounce.y = 0.7 + Math.random() * 0.2;
        //db data

        beer.abv = tapRoom.beers.list[beerListIndex].abv;
        beer.AveryName = tapRoom.beers.list[beerListIndex].name;
    }
    for(var i=0; i < fixedLocations.length; i += 1){
        addCan(fixedLocations[i].x, fixedLocations[i].y)
    }
    while(currLocation < game.width){
        currLocation += space
        addCan(currLocation, 100)
    }
}

function collectAveryBeer (player, beer) {
    drunkPercent += beer.abv
    drunkBar.setPercent(drunkPercent);
    beer.kill();
}


function addBadBeers(game){
    badBeer = game.add.group();
    badBeer.enableBody = true;
    var currLocation = 0;
    var space = game.width/this.coorsCanDesity
    var fixedLocations = [
        {x:400,y:100},
    ]
    var addCan = function(x, y){
        var coors = badBeer.create(x, y, 'coorsCan')
        coors.scale.setTo(.5, .5)
        coors.body.gravity.y = 6
    }
    for(var i=0; i < fixedLocations.length; i += 1){
        addCan(fixedLocations[i].x, fixedLocations[i].y)
    }
    while(currLocation < game.width){
        currLocation += space
        addCan(currLocation, 100)
    }
}

function hitBadBeer(player, beer) {
    if(drunkBar.percent == 0){
        player.kill()
    } else {
        drunkPercent = 0
        drunkBar.setPercent(drunkPercent);
    }
    beer.kill();
}
