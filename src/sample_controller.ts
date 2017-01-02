// @autoinject(name=sample_controller)
export function controller_factory() {

  let controller:SampleController = {

  	label: "hello",
    
    hello: async (ctx, next) => {
      ctx.body = { message: controller.label };
      await next;
    }

  };

  return controller;

};