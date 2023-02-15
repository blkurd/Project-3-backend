// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for artists
const Artist = require('../models/artist')

// custom middleware
const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
<<<<<<< HEAD
<<<<<<< HEAD:app/routes/artist_routes.js
const notAllowed = customErrors.NotAllowedError
=======
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/routes/artist_routes.js
=======
>>>>>>> 071c8da (Reordered all files)
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

<<<<<<< HEAD
<<<<<<< HEAD:app/routes/artist_routes.js
=======
=======
>>>>>>> 071c8da (Reordered all files)
//Temporary Seed Route 


router.get('/artist-seed', (req, res) => {
    const starterArtists = [
        {name: 'Briana Wright', description: 'An artist', location: 'City,State', website: 'www.google.com' },
        {name: 'Eric Elsner', description: 'An artist', location: 'City,State', website: 'www.google.com' },
        {name: 'Belal Elkurd', description: 'An artist', location: 'City,State', website: 'www.google.com' }
    ]

    Artist.deleteMany({})
        .then(() => {
        Artist.create(starterArtists)
            .then(data => {
                 res.json(data)
            })
            .catch(err => console.log('The following error occurred: \n', err))
        })
})






<<<<<<< HEAD
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/routes/artist_routes.js
=======
>>>>>>> 071c8da (Reordered all files)
//Artist Routes

// INDEX
// GET /artists
router.get('/artists', (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD:app/routes/artist_routes.js
    Artist.find()
        .then(artists => {
            return artists.map(artist => artist.toObject())
        })
        // respond with status 200 and JSON for artists
        .then(artists => res.status(200).json({ artists: artists }))
        // if an error occurs, pass it to the handler
        .catch(next)
=======
=======
>>>>>>> 071c8da (Reordered all files)
	Artist.find()
		.then((artists) => {
			return artists.map((artist) => artist.toObject())
		})
		// respond with status 200 and JSON for artists
		.then((artists) => res.status(200).json({ artists: artists }))
		// if an error occurs, pass it to the handler
		.catch(next)
<<<<<<< HEAD
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/routes/artist_routes.js
=======
>>>>>>> 071c8da (Reordered all files)
})

// SHOW
// GET /artists/:id
router.get('/artists/:id', (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD:app/routes/artist_routes.js
    // req.params.id will be set based on the `:id` in the route
    Artist.findById(req.params.id)
        .then(handle404)
        // a success will respond with 200 and JSON
        .then(artist => res.status(200).json({ artist: artist.toObject() }))
        // or if error, pass it to the handler
        .catch(next)
=======
=======
>>>>>>> 071c8da (Reordered all files)
	// req.params.id will be set based on the `:id` in the route
	Artist.findById(req.params.id)
		.then(handle404)
		// a success will respond with 200 and JSON
		.then((artist) => res.status(200).json({ artist: artist.toObject() }))
		// or if error, pass it to the handler
		.catch(next)
<<<<<<< HEAD
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/routes/artist_routes.js
=======
>>>>>>> 071c8da (Reordered all files)
})

// CREATE
// POST /artists
router.post('/artists', requireToken, removeBlanks, (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD:app/routes/artist_routes.js
    if (req.user.isCurator) {
        // set owner of new artist to be current user
        req.body.artist.owner = req.user.id

        Artist.create(req.body.artist)
            // respond to succesful `create` with status 201 and JSON of the new artist
            .then(artist => {
                res.status(201).json({ artist: artist.toObject() })
            })
            // if an error occurs, pass it off to our error handler
            .catch(next)
    } else {
        throw new notAllowed()
    }
=======
=======
>>>>>>> 071c8da (Reordered all files)
	// set owner of new artist to be current user
	req.body.artist.owner = req.user.id

	Artist.create(req.body.artist)
		// respond to succesful `create` with status 201 and JSON of the new artist
		.then((artist) => {
			res.status(201).json({ artist: artist.toObject() })
		})
		// if an error occurs, pass it off to our error handler
		.catch(next)
<<<<<<< HEAD
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/routes/artist_routes.js
=======
>>>>>>> 071c8da (Reordered all files)
})

// UPDATE
// PATCH /artists/:id
router.patch('/artists/:id', requireToken, removeBlanks, (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD:app/routes/artist_routes.js
    if (req.user.isCurator) {
        // if the client attempts to change the `owner` property by including a new
        // owner, prevent that by deleting that key/value pair
        delete req.body.artist.owner

        Artist.findById(req.params.id)
            .then(handle404)
            .then(artist => {
                // pass the `req` object and the Mongoose record to `requireOwnership`
                // it will throw an error if the current user isn't the owner
                requireOwnership(req, artist)

                // pass the result of Mongoose's `.update` to the next `.then`
                return artist.updateOne(req.body.artist)
            })
            // if that succeeded, return 204 and no JSON
            .then(() => res.sendStatus(204))
            // if an error occurs, pass it to the handler
            .catch(next)
    } else {
        throw new notAllowed()
    }
=======
=======
>>>>>>> 071c8da (Reordered all files)
	// if the client attempts to change the `owner` property by including a new
	// owner, prevent that by deleting that key/value pair
	delete req.body.artist.owner

	Artist.findById(req.params.id)
		.then(handle404)
		.then((artist) => {
			// pass the `req` object and the Mongoose record to `requireOwnership`
			// it will throw an error if the current user isn't the owner
			requireOwnership(req, artist)

			// pass the result of Mongoose's `.update` to the next `.then`
			return artist.updateOne(req.body.artist)
		})
		// if that succeeded, return 204 and no JSON
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
<<<<<<< HEAD
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/routes/artist_routes.js
=======
>>>>>>> 071c8da (Reordered all files)
})

// DESTROY
// DELETE /artists/:id
router.delete('/artists/:id', requireToken, (req, res, next) => {
<<<<<<< HEAD
<<<<<<< HEAD:app/routes/artist_routes.js
    if (req.user.isCurator) {
        Artist.findById(req.params.id)
            .then(handle404)
            .then(artist => {
                // throw an error if current user doesn't own the artist
                requireOwnership(req, artist)
                // delete the artist ONLY IF the above didn't throw
                artist.deleteOne()
            })
            // send back 204 and no content if the deletion succeeded
            .then(() => res.sendStatus(204))
            // if an error occurs, pass it to the handler
            .catch(next)
    } else {
        throw new notAllowed()
    }
})

module.exports = router
=======
=======
>>>>>>> 071c8da (Reordered all files)
	Artist.findById(req.params.id)
		.then(handle404)
		.then((artist) => {
			// throw an error if current user doesn't own the artist
			requireOwnership(req, artist)
			// delete the artist ONLY IF the above didn't throw
			artist.deleteOne()
		})
		// send back 204 and no content if the deletion succeeded
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

<<<<<<< HEAD
module.exports = router
>>>>>>> c190f1e (Added new hurdle to README,Added artist schema and routes):gallery-hub/app/routes/artist_routes.js
=======
module.exports = router
>>>>>>> 071c8da (Reordered all files)
