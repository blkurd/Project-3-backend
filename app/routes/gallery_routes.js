// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for our gallery
const Gallery = require('../models/gallery')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

<<<<<<< HEAD:app/routes/gallery_routes.js
<<<<<<< HEAD
//TEMPORARY SEED ROUTE

// router.get('/seed', (req, res) => {
//     Gallery.deleteMany({})
//         .populate('owner')
//         .then(() => {
//             Gallery.create(starterGalleries)
//                 .then(data => {
//                     res.json(data)
//                 })
//                 .catch(err =>
//                     console.log('The following error occurred: \n', err)
//                 )
//         })
// })
=======

=======
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
//TEMPORARY SEED ROUTE

router.get('/seed', (req, res) => {
    const starterGalleries = [
        {
            name: 'GalleryA',
            description: 'A gallery',
            location: 'City,State',
            img: 'image link here',
        },
        {
            name: 'GalleryB',
            description: 'A gallery',
            location: 'City,State',
            img: 'image link here',
        },
        {
            name: 'GalleryC',
            description: 'A gallery',
            location: 'City,State',
            img: 'image link here',
        },
        {
            name: 'GalleryD',
            description: 'A gallery',
            location: 'City,State',
            img: 'image link here',
        },
    ]

    Gallery.deleteMany({})
        .populate('owner')
        .then(() => {
            Gallery.create(starterGalleries)
                .then(data => {
                    res.json(data)
                })
                .catch(err =>
                    console.log('The following error occurred: \n', err)
                )
        })
})

<<<<<<< HEAD:app/routes/gallery_routes.js
>>>>>>> 071c8da (Reordered all files)

=======
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
//GALLERY ROUTES

// INDEX
// GET /galleries
router.get('/galleries', (req, res, next) => {
<<<<<<< HEAD:app/routes/gallery_routes.js
<<<<<<< HEAD
=======
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
    Gallery.find()
        .populate('owner')
        .then(galleries => {
            return galleries.map(gallery => gallery.toObject())
        })
        .then(galleries => res.status(200).json({ galleries: galleries }))
        .catch(next)
<<<<<<< HEAD:app/routes/gallery_routes.js
=======
	Gallery.find()
		.then((galleries) => {
			return galleries.map((gallery) => gallery.toObject())
		})
		// respond with status 200 and JSON for galleries
		.then((galleries) => res.status(200).json({ galleries: galleries }))
		// if an error occurs, pass it to the handler
		.catch(next)
>>>>>>> 071c8da (Reordered all files)
=======
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
})

// INDEX -- MINE
// GET /galleries-mine/:id

// ADD REQUIRETOKEN BACK IN

router.get('/galleries-mine', requireToken, (req, res, next) => {
    if (req.user.isCurator) {
        Gallery.find({ owner: req.user.id })
            .populate('owner')
            .then(galleries => {
                console.log(galleries)
                return galleries.map(gallery => gallery.toObject())
            })
            .then(galleries => res.status(200).json({ galleries: galleries }))
            .catch(next)
    } else {
        throw new notAllowed()
    }
})

// SHOW
// GET /galleries/:id
router.get('/galleries/:id', (req, res, next) => {
<<<<<<< HEAD:app/routes/gallery_routes.js
<<<<<<< HEAD
    // if the user is a curator
    // req.params.id will be set based on the `:id` in the route
    Gallery.findById(req.params.id)
        .then(handle404)
        .then(gallery => res.status(200).json({ gallery: gallery.toObject() }))
        .catch(next)
=======
	// req.params.id will be set based on the `:id` in the route
	Gallery.findById(req.params.id)
		.then(handle404)
		// a success will respond with 200 and JSON
		.then((gallery) => res.status(200).json({ gallery: gallery.toObject() }))
		// or if error, pass it to the handler
		.catch(next)
>>>>>>> 071c8da (Reordered all files)
=======
    // if the user is a curator
    if (isCurator)
        // req.params.id will be set based on the `:id` in the route
        Gallery.findById(req.params.id)
            .then(handle404)
            // a success will respond with 200 and JSON
            .then(gallery =>
                res.status(200).json({ gallery: gallery.toObject() })
            )
            // or if error, pass it to the handler
            .catch(next)
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
})

// CREATE
// POST /galleries
router.post('/galleries', requireToken, removeBlanks, (req, res, next) => {
<<<<<<< HEAD:app/routes/gallery_routes.js
<<<<<<< HEAD
    if (req.user.isCurator) {
        // set owner of new gallery to be current user
        req.body.gallery.owner = req.user.id

        Gallery.create(req.body.gallery)
            .then(gallery => {
                res.status(201).json({ gallery: gallery.toObject() })
            })
            .catch(next)
    } else {
        throw new notAllowed()
        // wtfDoIDoHere(omg)
        // res.status(401) -- this didn't really work, infinite hang and no actual error code
    }
=======
	// set owner of new gallery to be current user
	req.body.gallery.owner = req.user.id

	Gallery.create(req.body.gallery)
		// respond to succesful `create` with status 201 and JSON of the new gallery
		.then((gallery) => {
			res.status(201).json({ gallery: gallery.toObject() })
		})
		// if an error occurs, pass it off to our error handler
		.catch(next)
>>>>>>> 071c8da (Reordered all files)
=======
    console.log(req)
    // set owner of new gallery to be current user
    req.body.gallery.owner = req.user.id

    Gallery.create(req.body.gallery)
        // respond to succesful `create` with status 201 and JSON of the new gallery
        .then(gallery => {
            res.status(201).json({ gallery: gallery.toObject() })
        })
        // if an error occurs, pass it off to our error handler
        .catch(next)
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
})

// UPDATE
// PATCH /galleries/:id
router.patch('/galleries/:id', requireToken, removeBlanks, (req, res, next) => {
<<<<<<< HEAD:app/routes/gallery_routes.js
<<<<<<< HEAD
    if (req.user.isCurator) {
        // if the client attempts to change the `owner` property by including a new
        // owner, prevent that by deleting that key/value pair
        delete req.body.gallery.owner

        Gallery.findById(req.params.id)
            .then(handle404)
            .then(gallery => {
                // pass the `req` object and the Mongoose record to `requireOwnership`
                // it will throw an error if the current user isn't the owner
                requireOwnership(req, gallery)

                // pass the result of Mongoose's `.update` to the next `.then`
                return gallery.updateOne(req.body.gallery)
            })
            .then(() => res.sendStatus(204))
            .catch(next)
    } else {
        throw new notAllowed()
    }
=======
	// if the client attempts to change the `owner` property by including a new
	// owner, prevent that by deleting that key/value pair
	delete req.body.gallery.owner
=======
    // if the client attempts to change the `owner` property by including a new
    // owner, prevent that by deleting that key/value pair
    delete req.body.gallery.owner
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js

    Gallery.findById(req.params.id)
        .then(handle404)
        .then(gallery => {
            // pass the `req` object and the Mongoose record to `requireOwnership`
            // it will throw an error if the current user isn't the owner
            requireOwnership(req, gallery)

<<<<<<< HEAD:app/routes/gallery_routes.js
			// pass the result of Mongoose's `.update` to the next `.then`
			return gallery.updateOne(req.body.gallery)
		})
		// if that succeeded, return 204 and no JSON
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
>>>>>>> 071c8da (Reordered all files)
=======
            // pass the result of Mongoose's `.update` to the next `.then`
            return gallery.updateOne(req.body.gallery)
        })
        // if that succeeded, return 204 and no JSON
        .then(() => res.sendStatus(204))
        // if an error occurs, pass it to the handler
        .catch(next)
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
})

// DESTROY
// DELETE /galleries/:id
router.delete('/galleries/:id', requireToken, (req, res, next) => {
<<<<<<< HEAD:app/routes/gallery_routes.js
<<<<<<< HEAD
    if (req.user.isCurator) {
        Gallery.findById(req.params.id)
            .then(handle404)
            .then(gallery => {
                // throw an error if current user doesn't own the gallery
                requireOwnership(req, gallery)
                // delete the gallery ONLY IF the above didn't throw
                gallery.deleteOne()
            })
            .then(() => res.sendStatus(204))
            .catch(next)
    } else {
        throw new notAllowed()
    }
})

module.exports = router
=======
	Gallery.findById(req.params.id)
		.then(handle404)
		.then((gallery) => {
			// throw an error if current user doesn't own the gallery
			requireOwnership(req, gallery)
			// delete the gallery ONLY IF the above didn't throw
			gallery.deleteOne()
		})
		// send back 204 and no content if the deletion succeeded
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

module.exports = router
>>>>>>> 071c8da (Reordered all files)
=======
    Gallery.findById(req.params.id)
        .then(handle404)
        .then(gallery => {
            // throw an error if current user doesn't own the gallery
            requireOwnership(req, gallery)
            // delete the gallery ONLY IF the above didn't throw
            gallery.deleteOne()
        })
        // send back 204 and no content if the deletion succeeded
        .then(() => res.sendStatus(204))
        // if an error occurs, pass it to the handler
        .catch(next)
})

module.exports = router
>>>>>>> 53710b0 (?):gallery-hub/app/routes/gallery_routes.js
