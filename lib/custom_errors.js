// First, we'll create some custom error types by extending `Error.prototype`
// This is simplest with ES6 class syntax. We'll set `name` and `message` in
// the constructor method of each custom error type to match the pattern that
// Express and Mongoose use for custom errors.

class OwnershipError extends Error {
<<<<<<< HEAD:lib/custom_errors.js
<<<<<<< HEAD
=======
>>>>>>> ae27a59 (all cud routes now protected by isCurator flag. a custom error will be thrown if the user  is not a curator):gallery-hub/lib/custom_errors.js
    constructor() {
        super()
        this.name = 'OwnershipError'
        this.message =
            'The provided token does not match the owner of this document'
    }
<<<<<<< HEAD:lib/custom_errors.js
}

class DocumentNotFoundError extends Error {
    constructor() {
        super()
        this.name = 'DocumentNotFoundError'
        this.message = "The provided ID doesn't match any documents"
    }
}

class BadParamsError extends Error {
    constructor() {
        super()
        this.name = 'BadParamsError'
        this.message = 'A required parameter was omitted or invalid'
    }
}

class BadCredentialsError extends Error {
    constructor() {
        super()
        this.name = 'BadCredentialsError'
        this.message = 'The provided username or password is incorrect'
    }
}

class NotAllowedError extends Error {
    constructor() {
        super()
        this.name = 'NotAllowedError'
        this.message = 'You must be a logged in curator to access this url'
    }
=======
	constructor() {
		super()
		this.name = 'OwnershipError'
		this.message =
			'The provided token does not match the owner of this document'
	}
=======
>>>>>>> ae27a59 (all cud routes now protected by isCurator flag. a custom error will be thrown if the user  is not a curator):gallery-hub/lib/custom_errors.js
}

class DocumentNotFoundError extends Error {
    constructor() {
        super()
        this.name = 'DocumentNotFoundError'
        this.message = "The provided ID doesn't match any documents"
    }
}

class BadParamsError extends Error {
    constructor() {
        super()
        this.name = 'BadParamsError'
        this.message = 'A required parameter was omitted or invalid'
    }
}

class BadCredentialsError extends Error {
<<<<<<< HEAD:lib/custom_errors.js
	constructor() {
		super()
		this.name = 'BadCredentialsError'
		this.message = 'The provided username or password is incorrect'
	}
>>>>>>> 071c8da (Reordered all files)
=======
    constructor() {
        super()
        this.name = 'BadCredentialsError'
        this.message = 'The provided username or password is incorrect'
    }
}

class NotAllowedError extends Error {
    constructor() {
        super()
        this.name = 'NotAllowedError'
        this.message = 'You must be a logged in curator to access this url'
    }
>>>>>>> ae27a59 (all cud routes now protected by isCurator flag. a custom error will be thrown if the user  is not a curator):gallery-hub/lib/custom_errors.js
}

// this method checks if the user trying to modify a resource is the owner of
// resource, and throws an error if not

// `requestObject` should be the actual `req` object from the route file
const requireOwnership = (requestObject, resource) => {
<<<<<<< HEAD:lib/custom_errors.js
<<<<<<< HEAD
=======
>>>>>>> ae27a59 (all cud routes now protected by isCurator flag. a custom error will be thrown if the user  is not a curator):gallery-hub/lib/custom_errors.js
    // `requestObject.user` will be defined in any route that uses `requireToken`
    // `requireToken` MUST be passed to the route as a second argument
    const owner = resource.owner._id ? resource.owner._id : resource.owner
    //  check if the resource.owner is an object in case populate is being used
    //  if it is, use the `_id` property and if not, just use its value
    if (!requestObject.user._id.equals(owner)) {
        throw new OwnershipError()
    }
<<<<<<< HEAD:lib/custom_errors.js
}

// if the client passes an ID that isn't in the DB, we want to return 404
const handle404 = record => {
    if (!record) {
        throw new DocumentNotFoundError()
    } else {
        return record
    }
}

module.exports = {
    requireOwnership,
    handle404,
    BadParamsError,
    BadCredentialsError,
    NotAllowedError,
=======
	// `requestObject.user` will be defined in any route that uses `requireToken`
	// `requireToken` MUST be passed to the route as a second argument
	const owner = resource.owner._id ? resource.owner._id : resource.owner
	//  check if the resource.owner is an object in case populate is being used
	//  if it is, use the `_id` property and if not, just use its value
	if (!requestObject.user._id.equals(owner)) {
		throw new OwnershipError()
	}
=======
>>>>>>> ae27a59 (all cud routes now protected by isCurator flag. a custom error will be thrown if the user  is not a curator):gallery-hub/lib/custom_errors.js
}

// if the client passes an ID that isn't in the DB, we want to return 404
const handle404 = record => {
    if (!record) {
        throw new DocumentNotFoundError()
    } else {
        return record
    }
}

module.exports = {
<<<<<<< HEAD:lib/custom_errors.js
	requireOwnership,
	handle404,
	BadParamsError,
	BadCredentialsError,
>>>>>>> 071c8da (Reordered all files)
=======
    requireOwnership,
    handle404,
    BadParamsError,
    BadCredentialsError,
    NotAllowedError,
>>>>>>> ae27a59 (all cud routes now protected by isCurator flag. a custom error will be thrown if the user  is not a curator):gallery-hub/lib/custom_errors.js
}
