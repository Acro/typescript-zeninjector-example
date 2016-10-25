//@autoinject(name=sample_controller)
var controllerFactory = function () {

	var controller: SampleController = {

		label: "hello world",

		query: function (query, unescaped_values) {
			return [ 1, 2 ]
		}

	}

	return controller

}

export { controllerFactory }