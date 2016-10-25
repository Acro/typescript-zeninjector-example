//@autoinject(name=api)
var apiFactory = function (sample_controller: SampleController) {

	var api_instance = {

		start: function () {

			console.log(sample_controller.label)

			var query_result = sample_controller.query("SELECT * FROM xx WHERE name = ?", [ "test" ])
			console.log(query_result)

		}

	}

	return api_instance
}

export { apiFactory }