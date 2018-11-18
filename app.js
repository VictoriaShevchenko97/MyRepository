
var core =require('./jsb/core.js')();

global.app=core.express();
global.app.core=core;

global.app.mod={};

require('./jsb/middlewares')(global.app,__dirname);
require('./jsb/wsserver');

app.get('/',function (req,res) {
	if(!req.session.user){
		req.session.user=0;}
	
		if(req.session.user==0){
			res.render('auth');
		}
		else{
			res.render('user',{login:req.session.user});
			}
	
});
app.post('/login',function(req,res){
	req.session.user=req.body.username;
	res.send({redirect:'/'});
})
app.post('/logout',function(req,res){
	req.session.user=0;
	res.redirect('/');
})



module.exports = {app};
