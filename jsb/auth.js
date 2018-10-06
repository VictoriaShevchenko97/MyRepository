var mod={};
module.exports.mod=function() {
	mod.usereload=true;
	global.app.mod['url']=mod;
	return mod;
}

app.get('/auth',function (req,res) {
	//res.render('auth',data:{},errors:{})
});
app.post('auth',function(req,res) {
	res.render('auth',{data:req.body,errors:{
		message:{
			msg:'mEssage'
		}
	}})
})