const mongoose = require("mongoose");

const file  = new mongoose.Schema({
     title : {
         type: String,
         required : true,
     },
     path : {
        type: String,
        required: true,
     },

}, {
    timestamps : true,
    toObject: { virtuals: true},
    toJSON: {virtuals: true}
});

file.virtual("url").get(function(){

const url = process.env.PORT || 'http://localhost:3333'

    return `${url}/files/${encodeURIComponent(this.path)}`;
});

module.exports = mongoose.model('file', file);