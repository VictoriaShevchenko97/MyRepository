module.exports =function() {
   return core;
}

var core={
	os:require('os'),
	createError:require('http-errors'),
	express:require('express'),
	path:require('path'),
	bodyParser:require('body-parser'),
	cookieParser:require('cookie-parser'),
	logger:require('morgan'),
	static:require('node-static'),
	indexRouter:require('../routes/index'),
	usersRouter:require('../routes/users'),
	url:require('url'),
	pug:require('pug'),
	sql:require('mysql')
}

