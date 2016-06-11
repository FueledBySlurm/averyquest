var tapRoom = function(){
    app = {
        beers: [],
        food: [],
        init: function(){
            this.populateTapRoom();
            this.populateHoppyBeers();
            this.populatFood();
        },
        validate: function(beer){
            if(beer.id && beer.abv && beer.name){
                return true;
            }
            return false;
        },
        addBeer: function(beer){
            if (!this.validate(beer)){
                return
            }
            var unique = true;
            $.each(this.beers, function(i, current){
                if(current.id == beer.id) {
                    if (! current.hasOwnProperty('hoppy')){
                        current.hoppy = true
                    }
                    unique = false
                }
            });
            if (! unique){
                return
            }
            var hopValue;
            if(!beer.hasOwnProperty('hoppy')){
                hopValue = 10.00;
            } else {
                hopValue = 10.00 + parseFloat(beer.abv)
            }
            this.beers.push({
                "id": beer.id,
                "abv": parseFloat(beer.abv),
                "name": beer.name,
                "image": "",
                "hopValue": hopValue
            });
        },
        addFood: function(food){
            this.food.push({
                "name": food.name,
                "price": parseInt(food.price)
            })
        },
        populateTapRoom: function(){
            $.ajax({
                "url": "http://apis.mondorobot.com/taproom/on-tap",
                "dataType": "json",
                success: function(data){
                    $.each(data.beer_list.beers, function(i, beer){
                        app.addBeer(beer)
                    });
                },
                "error": function(){
                    console.log("falied to fetch hoppy beers")
                }
            });
        },
        populateHoppyBeers: function(){
            $.ajax({
                "url": "http://apis.mondorobot.com/beers",
                "dataType": "json",
                "data": {
                    "categories": "Hop-forward"
                },
                success: function(data){
                    $.each(data.beers, function(i, beer){
                        beer.hoppy = true
                        app.addBeer(beer)
                    });
                },
                "error": function(){
                    console.log("falied to fetch hoppy beers")
                }
            });
        },
        populatFood: function(){
            $.ajax({
                url: "http://apis.mondorobot.com/taproom/menu",
                dataType: "json",
                success: function(data){
                    $.each(data.menu.menu_sections, function(i, section){
                        if (section.title == "Dining Menu"){
                            $.each(section.menu_items, function(i, foodItem){
                                app.addFood(foodItem)
                            });
                        }
                    });
                },
                error: function(){
                    console.log("falied to fetch populatFood")
                }
            });
        }
    }
    app.init()
    tapRoom = {
        "beers": {
            "list": app.beers,
            "byID": function(id){
                var returnVal;
                $.each(this.list, function(i, current){
                    if(current.id == id){ returnVal = current }
                });
                return returnVal
            }
        },
        "food": app.food,
    }

}
$(document).ready(function(){
    tapRoom();
})
