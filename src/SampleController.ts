//@autoinject
var sample_controller = function () {
    
    var controller: SampleController = {

    	label: "hello world",

    	query: function (query, unescaped_values) {
	    	return [ 1, 2 ]
	    }

    }

    return controller

}

export { sample_controller }