
module.exports=function(app,base) {
app.set("view engine", "pug");
app.set("views", app.core.path.join(base, "views"));

app.use( app.core.express.static(app.core.path.join(base, "js")));
app.use(app.core.express.static(base));

app.disable('x-powered-by');
app.set('views', app.core.path.join(base, 'views'));
app.set('view engine', 'pug');
app.set('dir_public', base);
app.use(app.core.bodyParser.urlencoded({limit: '25mb', extended: false }));
app.set('trust proxy', 1) // trust first proxy


redis=app.core.redis.createClient();
redis.on('connect', function() {
    console.log('Redis client connected');
});
redis.on('error', function (err) {
    console.log('Something went wrong ' + err);
});
RedisStore=app.core.connectredis(app.core.session);
global.app.sessionstore=new RedisStore({ host: '127.0.0.1', port: 6379, client: redis });
 app.use(app.core.session({
      secret: "kqsdjfmlksdhfhzirzeoibrzecrbzuzefcuercazeafxzeokwdfzeijfxcerig",
      store: new RedisStore({ host: '127.0.0.1', port: 6379, client: redis })
  }));

global.urlencoded=app.core.bodyParser.urlencoded({extended:false});

global.conn=require(base+'/jsb/connection')();
global.router=require(base+'/routes/index');

}