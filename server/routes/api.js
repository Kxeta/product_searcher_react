var express = require('express');
var router  = express.Router();
var request = require('request');

const visibleProducts = 4


router.get('/items', function(req, res) {
    var searchQuery = req.query.q;
    request({uri: 'https://api.mercadolibre.com/sites/MLA/search?q=' + searchQuery}, 
        function(error, response, body) {
            var results = JSON.parse(response.body).results.slice(0,visibleProducts);
            var formattedResults = [];
            for(var i = 0; i < visibleProducts; i++){
                var price = null;
                if(results[i].price){
                    price = results[i].price.toString()
                }
                var item = {
                    id: results[i].id,
                    title: results[i].title,
                    price: {
                        currency: results[i].currency_id,
                        amount: price ? price.split('.')[0] : null,
                        decimals: price ? price.split('.')[1] ? price.split('.')[1] : 00 : null
                    },
                    picture: results[i].thumbnail,
                    condition: results[i].condition,
                    free_shipping: results[i].shipping.free_shipping,
                    city: results[i].address.city_name
                }
                formattedResults.push(item);
            }
            res.json({ author: { name: "Phillipe", lastname: "Rodrigues" }, items: formattedResults });
        }
    );
});

router.get('/items/:id', function(req, res) {
    var idQuery = req.params.id;
    var formattedResult;
    request({uri: 'https://api.mercadolibre.com/items/' + idQuery}, 
        function(error, response, body) {
            var result1 = JSON.parse(response.body);
            if(result1.status == 404){
                res.json({ author: { name: "Phillipe", lastname: "Rodrigues" }, item: formattedResult });
            }
            else{
                request({uri: 'https://api.mercadolibre.com/items/' + idQuery + '/description'}, 
                    function(error, response, body) {
                        var result2 = JSON.parse(response.body);
                        var price = null;
                        if(result1.price){
                            price = result1.price.toString()
                        }
                        formattedResult = {
                            id: result1.id,
                            title: result1.title,
                            price: {
                                currency: result1.currency_id,
                                amount: price ? price.split('.')[0] : null,
                                decimals: price ? price.split('.')[1] ? price.split('.')[1] : 00 : null
                            },
                            sold_quantity: result1.sold_quantity ? result1.sold_quantity : 0,
                            description: result2.text,
                            picture: result1.pictures[0].url,
                            picture_details:{
                                size: result1.pictures[0].size,
                                max_size: result1.pictures[0].max_size
                            },
                            condition: result1.condition,
                            free_shipping: result1.shipping.free_shipping,
                            city: result1.seller_address.city.name
                        }
                        res.json({ author: { name: "Phillipe", lastname: "Rodrigues" }, item: formattedResult });
                    }
                );
            }
        }
    );
});

module.exports = router;