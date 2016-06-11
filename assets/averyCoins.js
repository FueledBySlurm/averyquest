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
        {x:2000,y:100},
        {x:2030,y:100},
        {x:2060,y:100},
        {x:2090,y:100},
        {x:1970,y:100},
        {x:1940,y:100},
        {x:1910,y:100},

        {x:3880,y:10},
        {x:3172,y:400},
        {x:3462,y:400},
        {x:3580,y:400},
        {x:4000,y:100},
        {x:4800,y:100},
        {x:4830,y:100},
        {x:4860,y:100},
        {x:4890,y:100},
        {x:4920,y:100},
        {x:4950,y:100},
        {x:4980,y:100},
        {x:557, y:100},
        {x:587, y:100},
        {x:4429, y:100},
        {x:4457, y:100},

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
    // while(currLocation < game.width){
    //     currLocation += space
    //     addCan(currLocation, 100)
    // }
}
function collectAveryCoin (player, star) {
    averyCoins += 1;
    scoreText.text = scoreString + averyCoins;
    star.kill();
}

function addAveryBeers(game){
    mtSanitas = function(){
        list = []
        canLocaleX = 3000
        for(var i=0; i < 5 && i < tapRoom.beers.list.length; i++){
            list.push({x:canLocaleX,y:100,"id":i})
            canLocaleX += 100;
        }
        return list
    }
    averyBeer = game.add.group();
    averyBeer.enableBody = true;
    var currLocation = 0;
    var space = game.width/this.averyCanDesity
    var fixedLocations = mtSanitas()
    fixedLocations.push({x:1500,y:100,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:1800,y:100,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:4639,y:100,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:5000,y:100,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:5200,y:100,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    // fixedLocations.push({x:3200,y:10,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:3100,y:500,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:329,y:10,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:632,y:10,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:1106,y:10,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:1289,y:10,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    // fixedLocations.push({x:1271,y:10,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:2545,y:100,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})
    fixedLocations.push({x:4134,y:100,"id":Math.floor(Math.random() * tapRoom.beers.list.length)})

    var addCan = function(x, y, index){
        var beer = averyBeer.create(x, y, tapRoom.beers.list[index].id);
        beer.scale.setTo(.5, .5)
        beer.body.gravity.y = 6;
        beer.body.bounce.y = 0.7 + Math.random() * 0.2;
        beer.abv = tapRoom.beers.list[index].abv;
        beer.AveryName = tapRoom.beers.list[index].name;
    }
    for(var i=0; i < fixedLocations.length; i += 1){
        addCan(fixedLocations[i].x, fixedLocations[i].y, fixedLocations[i].id)
    }
    // while(currLocation < game.width){
    //     beerListIndex = Math.floor(Math.random() * tapRoom.beers.list.length)
    //     currLocation += space
    //     addCan(currLocation, 100, beerListIndex)
    // }
}

function collectAveryBeer (player, beer) {
    drunkPercent += beer.abv
    drunkBar.setPercent(drunkPercent);
    messageText.text = "Scored a "+beer.AveryName+"! +"+beer.abv;
    beer.kill();
    setTimeout(function(){
        messageText.text = "";
    }, 3000);
}


function addBadBeers(game){
    badBeer = game.add.group();
    badBeer.enableBody = true;
    var currLocation = 0;
    var space = game.width/this.coorsCanDesity
    var fixedLocations = [
        {x:417,y:100},
        {x:1281,y:100},
        {x:3778,y:100},
        {x:3400,y:100},
        {x:4400,y:100},
        {x:2340,y:100},
        {x:18400,y:100},
        // {x:3400,y:100},
        {x:4400,y:100},
        {x:5100,y:100},
    ]
    var addCan = function(x, y){
        var coors = badBeer.create(x, y, 'coorsCan')
        coors.scale.setTo(.5, .5)
        coors.body.gravity.y = 6
    }
    for(var i=0; i < fixedLocations.length; i += 1){
        addCan(fixedLocations[i].x, fixedLocations[i].y)
    }
    // while(currLocation < game.width){
    //     currLocation += space
    //     addCan(currLocation, 100)
    // }
}

function hitBadBeer(player, beer) {
    if(drunkBar.percent == 0){
        player.kill()
    } else {
        drunkPercent = 0
        drunkBar.setPercent(drunkPercent);
        messageText.text = "Shitty Beer X_X...Sober up!";
        console.log(messageText)
        beer.kill();
        setTimeout(function(){
            messageText.text = "";
        }, 3000);
    }
    beer.kill();
}
