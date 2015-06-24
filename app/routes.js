var FavouriteItem = require('./models/favouriteItem');

var getAllItems = function(res) {
	FavouriteItem.find(function(err, items) {
        if (err) {
    	    res.send(err);
	    } else {
            res.json(items);
	    }
    });
};

// Define and export all Express REST api routes
module.exports = function(app) {
	app.get('/api/favourites', function(req, res) {  // Return all favourites
        getAllItems(res);
    });

    app.post('/api/favourites', function(req, res) {  // Save to favourites
        FavouriteItem.create({
            id: req.body.id,
            url: req.body.url
        }, function(err, item) {
            if (err) {
                res.send(err);
		    } else {
	            getAllItems(res);
		    }
        });

     });

    app.delete('/api/favourites/:item_id', function(req, res) {  // Delete from favourites
        FavouriteItem.remove({
            id : req.params.item_id
        }, function(err, item) {
            if (err) {
                res.send(err);
		    } else {
			    getAllItems(res);
		    }
        });
    });

    // Application
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');  // Load static app at localhost:8080
    });
};