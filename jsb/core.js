module.exports =function() {
   return core;
}

var core={
	os:require('os'),
	createError:require('http-errors'),
	express:require('express'),
	path:require('path'),
	cookieParser:require('cookie-parser'),
	logger:require('morgan'),
	static:require('node-static'),
	indexRouter:require('../routes/index'),
	usersRouter:require('../routes/users'),
	url:require('url'),
	pug:require('pug'),
	sql:require('mysql'),
	http:require('http'),	
	bodyParser:require('body-parser'),
	static:require('node-static'),
	sequelize:require('sequelize'),
	ws:require('ws'),
	io:require('socket.io'),
	session:require('express-session'),
	redis:require('redis'),
	crypt:require('bcrypt'),
	connectredis:require('connect-redis'),
	mysql:require('mysql2')
}

