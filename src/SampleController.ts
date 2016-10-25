//@autoinject
var sample_controller = function () {
    
    var controller: SampleController = {

    	label: "hello world",

    	query: function (query: string, unescaped_values: [ any ]) {
	    	return [ 1, 2 ]
	    }

    }

    return controller

}

export { sample_controller }