var mod={};
module.exports=function() {
	mod.usereload=true;
	global.app.mod['result']=mod;
	return mod;
}
mod.connection=function(query){
	var con=global.app.core.sql.createConnection(
	{
	  host: "localhost",
	  user: "root",
	  password: "",
	  database: "ruby"
	});
     con.connect(function (err) {
     	if(err)throw err;
     	else{console.log("Connected!");}
     
     	// body...
     });

	con.query(query, function(err, result) {
  		if (err) throw err;
  		mod['result']=result;
  	  	
	});

	con.end();
 }
   
