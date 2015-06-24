var mongoose = require('mongoose');

// Schema for a shopping item
module.exports = mongoose.model('FavouriteItem', {
    id : String,
    url: String
});