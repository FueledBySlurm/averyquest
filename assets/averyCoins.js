function addAveryCoins(game){
    averyCoin = game.add.group();
    averyCoin.enableBody = true;
    var currLocation = 0;
    var space = game.width/this.averyCoinDesity
    var fixedLocations = [
        {x:1000,y:100},
        {x:1005,y:100},
        {x:1008,y:100},
        {x:1012,y:100},
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
    averyBeer = game.add.group();
    averyBeer.enableBody = true;
    var currLocation = 0;
    var space = game.width/this.averyCanDesity
    var fixedLocations = [
        {x:380,y:100},
    ]
    var addCan = function(x, y){
        var beer = averyBeer.create(x, y, 'starBig');
        beer.scale.setTo(.5, .5)
        beer.body.gravity.y = 6;
        beer.body.bounce.y = 0.7 + Math.random() * 0.2;
        //db data
        beerListIndex = Math.floor(Math.random() * tapRoom.beers.list.length)
        beer.abv = tapRoom.beers.list[beerListIndex].hopValue;
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
