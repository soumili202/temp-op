const mongoose = require ('mongoose');
const Schema = mongoose.Schema({
    plot: {
        type: String,
        
    },
    title: {
        type: String,
        
    },
    fullplot: {
        type: String,
        
    },


    

    }
);
model = mongoose.model('model', Schema, 'movies');
module.exports = model;