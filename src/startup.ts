/// <reference path="../typings/index.d.ts" />
/// <reference path="../zazeninjector.d.ts" />

'use strict'

import * as co from 'co';

// This `import x = require` is necessary because the package
// exports a single class, something not supported by ES6, which
// TS have therefore invented their own syntax for.
import Zeninjector = require('zazeninjector');

const container = new Zeninjector();

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
