
var core =require('./jsb/core.js')();

global.app=core.express();
global.app.core=core;

global.app.mod={};
global.app.core.http.createServer();
app.set("view engine", "pug");
app.set("views", app.core.path.join(__dirname, "views"));

app.use( app.core.express.static( app.core.path.join(__dirname, "js")));
app.use(app.core.express.static(__dirname));

var urlencoded=app.core.bodyParser.urlencoded({extended:false});

var conn=require('./jsb/connection')();
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
	res.render("auth",{title:"fddsds",data:req.body});
})

var httpserver = core.http.createServer(app);
//global.app.httpindex=require('./routes/index')(app);
global.app.set('views', core.path.join(__dirname, 'views'));
global.app.set('view engine', 'pug');
global.app.set('dir_public', __dirname);

global.app.use(global.app.core.bodyParser.urlencoded({limit: '25mb', extended: false }));

app.listen(3000);
module.exports = app;
