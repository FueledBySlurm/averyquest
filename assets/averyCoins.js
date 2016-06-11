function addAveryCoins(game){
    coinCount = 0;
    averyCoin = game.add.group();
    averyCoin.enableBody = true;
    for (var i = 0; i < 12; i++)
    {
        var star = averyCoin.create(i * 70, 0, 'averyCoin');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
}
function collectAveryCoin (player, star) {

    // Removes the star from the screen
    coinCount += 1;
    star.kill();

}

function addAveryBeers(game){
    averyBeer = game.add.group();
    averyBeer.enableBody = true;
    for (var i = 0; i < 12; i++)
    {
        var beer = averyBeer.create(i * 65, 0, 'starBig');
        beer.body.gravity.y = 6;
        beer.body.bounce.y = 0.7 + Math.random() * 0.2;
        beerListIndex = Math.floor(Math.random() * tapRoom.beers.list.length)
        beer.abv = tapRoom.beers.list[beerListIndex].hopValue;
        beer.AveryName = tapRoom.beers.list[beerListIndex].name;
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
    for (var i = 0; i < 5; i++)
    {
        var star = badBeer.create(i * 80, 0, 'droid');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
}

function hitBadBeer(player, beer) {
    if(drunkBar.percent == 0){
        player.kill()
    } else {
        drunkBar.setPercent(0);
    }
    beer.kill();
}
