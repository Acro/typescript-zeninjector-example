/// <reference path="./third_party_declarations/zazeninjector.d.ts" />

import Zeninjector = require('zazeninjector');
import * as Pino from 'pino';

// `import x = require` is necessary packages that export a single class,
// something not supported by ES6, which TS have therefore invented their own
// syntax for.

let pino = Pino();
let container = new Zeninjector();

container.setLogger(pino);
container.registerAndExport('logger', pino);

async function boot() {
  await container.scan(__dirname + '/**/*.js');
  let api = await container.resolve('api');
  api.start();
};

boot();