var tapRoom = function(){
    app = {
        beers: [],
        food: [],
        init: function(){
            beerData = [
                {
                    "id": 'white-rascal',
                    "name": "White Rascal",
                    "hoppy": false,
                    "abv": 5.6,
                    "label_image": {
                        "original": "assets/beer_labels/WhiteRascal_Face_HighRes-50x92-9bd6f52.png"
                    }
            
                },
                {
                    "id": 'avery-ipa',
                    "name": "Avery IPA",
                    "hoppy": true,
                    "abv": 6.5,
                    "label_image": {
                        "original": "assets/beer_labels/AveryIPA_Face_HighRes-50x92-1d0bc01.png"
                    }
            
                },
                {
                    "id": 'el-gose',
                    "name": "El Gose",
                    "hoppy": false,
                    "abv": 4.5,
                    "label_image": {
                        "original": "assets/beer_labels/ElGose_Face_HighRes-50x92-72c8ec3.png"
                    }
            
                },
                {
                    "id": 'lilikoi-kepolo',
                    "name": "Liliko'i Kepolo",
                    "hoppy": false,
                    "abv": 5.4,
                    "label_image": {
                        "original": "assets/beer_labels/LilikoiKepolo_Face_HighRes-50x93-34e11b3.png"
                    }
            
                },
                {
                    "id": 'hazyish-ipa',
                    "name": "Hazyish IPA",
                    "hoppy": true,
                    "abv": 7.0,
                    "label_image": {
                        "original": "assets/beer_labels/HazyishIPA_Face_HighRes-50x92-05d0d3d.png"
                    }
            
                },
                {
                    "id": "the-maharaja",
                    "name": "The Maharaja",
                    "hoppy": true,
                    "abv": 10.0,
                    "label_image": {
                        "original": "assets/beer_labels/MaharajaIPA_Face_HighRes-50x92-6d0e465.png"
                    }
                },
                
            ]
            console.log(beerData);
            $.each(beerData, function(i, beer){
                app.addBeer(beer)
            })
        },
        validate: function(beer){
            if(beer.id && beer.abv && beer.name){
                return true;
            }
            return false;
        },
        addBeer: function(beer){

            if (!this.validate(beer) || this.beers.length > 30){
                return
            }
            var unique = true;
            var hopValue = 0;
            if(beer.hoppy){
                hopValue = 8 * parseFloat(beer.abv);
            }
            $.each(this.beers, function(i, current){
                if(current.id == beer.id) {
                    unique = false
                    if(current.hoppy || beer.hoppy){
                        app.beers[i].hopValue = hopValue
                    }
                }
            });
            if (! unique){
                return
            }

            this.beers.push({
                "id": beer.id,
                "abv": parseFloat(beer.abv),
                "name": beer.name,
                "image": beer.label_image.original,
                "hopValue": hopValue
            });
        },
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
        }
    }

}
$(document).ready(function(){
    tapRoom();
})
