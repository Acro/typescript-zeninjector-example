import * as Koa from 'koa';
let app = new Koa();

// @autoinject(name=api)
export function api_factory(sample_controller:SampleController) {

  // setup middlewares/routes
  app.use(sample_controller.hello);

  // expose API instance
  let api_instance = {

    start: async function api_instance() {

      let port = 1337;
      app.listen(port);
      console.info(`API listening on ${port}.`);

    },

    app: app

  };

  return api_instance;

};
