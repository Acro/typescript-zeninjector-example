"use strict";
//@autoinject
var sample_controller = function () {
    var controller = {
        label: "hello world",
        query: function (query, unescaped_values) {
            return [1, 2];
        }
    };
    return controller;
};
exports.sample_controller = sample_controller;
