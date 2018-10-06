
var core =require('./jsb/core.js')();

global.app=core.express();
global.app.core=core;

global.app.mod={};

require('./jsb/middlewares')(global.app,__dirname);
require('./jsb/wsserver');

app.get('/',function (req,res) {
	res.render('auth');
});
app.get('/auth',function (req,res) {
	res.render('auth');
	// body...
});


module.exports = {app};
