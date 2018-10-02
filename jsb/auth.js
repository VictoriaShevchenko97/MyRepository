
global.app.post('/auth',function (req,res) {
	if(!req.body)res.sendStatus(400);
	console.log(req.body);
	res.sendStatus(200);
});