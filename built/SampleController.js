"use strict";
//@autoinject(name=sample_controller)
var controllerFactory = function () {
    var controller = {
        label: "hello world",
        query: function (query, unescaped_values) {
            return [1, 2];
        }
    };
    return controller;
};
exports.controllerFactory = controllerFactory;
