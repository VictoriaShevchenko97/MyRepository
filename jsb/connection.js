var mod={};

module.exports=function() {
	mod.usereload=true;
	global.app.mod['db']=mod;
	return mod;
}
mod.connection=function(){
	
  var sequelize = new global.app.core.sequelize.Sequelize('ruby', 'root', '', {
		host: 'localhost',
		dialect: 'mysql',
		pool: {
		    max: 5,
		    min: 0,
		    idle: 10000
		  },

 
});
return sequelize;
 }
   
