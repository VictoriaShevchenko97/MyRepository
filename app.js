
var core =require('./jsb/core.js')();

global.app=core.express();
global.app.core=core;

global.app.mod={};

require('./jsb/middlewares')(global.app,__dirname);
require('./jsb/wsserver');

conn.connection('SELECT * from `user`');
app.get('/',function (req,res) {
	res.render("auth",{title:app.mod['result']['result'][0]['username']});
console.log(app.mod['result']['result'][0]);
	// body...
});
app.post('/',(res,req)=>{
	console.log(req.body);
})
var models = {
    Auth: require('./jsb/auth')
};
app.post('/auth',urlencoded,function (req,res) {
	if(!req.body)return res.sendStatus(400);
	response.send(`${request.body.login} - ${request.body.password}`);
})

var httpserver = core.http.createServer(app);
//global.app.httpindex=require('./routes/index')(app);

app.listen(3000);
module.exports = app;
