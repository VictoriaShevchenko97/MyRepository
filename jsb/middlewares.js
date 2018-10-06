
module.exports=function(app,base) {
app.set("view engine", "pug");
app.set("views", app.core.path.join(base, "views"));

app.use( app.core.express.static(app.core.path.join(base, "js")));
app.use(app.core.express.static(base));
console.log(base);
app.disable('x-powered-by');
app.set('views', app.core.path.join(base, 'views'));
app.set('view engine', 'pug');
app.set('dir_public', base);
app.use(app.core.bodyParser.urlencoded({limit: '25mb', extended: false }));

global.urlencoded=app.core.bodyParser.urlencoded({extended:false});

global.conn=require(base+'/jsb/connection')();
global.router=require(base+'/routes/index');
}