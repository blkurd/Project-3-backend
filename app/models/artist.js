<<<<<<< HEAD:app/models/artist.js
//The Artist Model/Schema

const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: String,
        location: String,
        website: String,
        img: String,
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
    },
    { timestamps: true }
)
=======
//The Artist Model/Schema 


const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: String, 
    location: String, 
    website: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }, 
}, { timestamps: true})
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/models/artist.js

module.exports = mongoose.model('Artist', artistSchema)
