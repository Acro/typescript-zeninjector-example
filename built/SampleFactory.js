"use strict";
//@autoinject
var api = function (sample_controller) {
    var api_instance = {
        start: function () {
            console.log(sample_controller.label);
            var query_result = sample_controller.query("SELECT * FROM xx WHERE name = ?", ["test"]);
            console.log(query_result);
        }
    };
    return api_instance;
};
exports.api = api;
