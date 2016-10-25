'use strict'

const co = require('co')
const Zeninjector = require('zazeninjector')
const container = new Zeninjector()

var boot = function* () {
	yield container.scan(__dirname + '/**/*.js')
	var api = yield container.resolve('api')
	api.start()
}

var handleError = (err) => {
	console.log(err.stack)
	throw err
}

co(boot).catch(handleError)