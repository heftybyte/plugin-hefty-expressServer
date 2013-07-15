"use strict";

module.exports = function setup(options, imports, register) {

	var express = require('express');
	var app = express();
	var http = require('http');

	// all environments
	app.set('port', options.port);
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);

	// development only
	if (options.environment === 'development') {
		app.use(express.errorHandler());
	}

	http.createServer(app).listen(app.get('port'), function(){
  		console.log('Express server listening on port ' + app.get('port'));
	});

	register(null, {
		httpServer: app
	});
}
