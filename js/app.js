require.config({

    baseUrl: 'js/lib',

    paths: {
        app: '../app',
        tpl: '../tpl'
    },

    map: {
        '*': {
            'app/models/employee': 'app/models/json/employee'
        }
    },

    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require(['jquery', 'backbone', 'app/router'], function ($, Backbone, Router) {

    var router = new Router();

    $("body").on("click", ".back-button", function (event) {
        event.preventDefault();
        window.history.back();
    });

    Backbone.history.start();
});