<<<<<<< HEAD
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
=======
>>>>>>> 071c8da (Reordered all files)
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
<<<<<<< HEAD
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/models/artist.js
=======
>>>>>>> 071c8da (Reordered all files)

module.exports = mongoose.model('Artist', artistSchema)
