function addAveryCoins(game){
    coinCount = 0;
    averyCoin = game.add.group();
    averyCoin.enableBody = true;
    for (var i = 0; i < 12; i++)
    {
        var star = averyCoin.create(i * 70, 0, 'starSmall');
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
        var star = averyBeer.create(i * 65, 0, 'starBig');
        beerListIndex = Math.floor(Math.random() * tapRoom.beers.list.length) + 1
        star.hopValue = tapRoom.beers.list[beerListIndex].hopValue;
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
}

function collectAveryBeer (player, beer) {
    console.log(beer.hopValue)
    myHealthBar.setPercent(50)
    beer.kill();
}


function addBadBeers(game){
    badBeer = game.add.group();
    badBeer.enableBody = true;
    for (var i = 0; i < 12; i++)
    {
        var star = badBeer.create(i * 80, 0, 'droid');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
}

function hitBadBeer(player, beer) {
    myHealthBar.setPercent(0)
    beer.kill();
}
