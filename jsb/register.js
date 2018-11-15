module.exports=
{
	
	exist:0,
	id:null,
	CheckUser:function(login, callback){
		this.exist=0;
		var User=this.seq_init();
		User.findOne({
			attributes: ['username'],
			where: 
			{
	    		username: login
	    	}

		}).then(c=>
		{
			if (c) {
				console.log(true);
			this.exist=1;
			}
			
			callback();
		});
		
	},
	seq_init:function(){
		var sequelize=global.app.mod['db'].connection();
		if(!sequelize)
		{
			console.log('Dont connect');
			return 0;
		}
		var User=sequelize.define('user',{},{
			timestamps: false,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			tableName: 'user'
		})
		return User;
	},
	Register:function(login,password,cb){
		this.id=null;
		var sequelize=global.app.mod['db'].connection();
		if(!sequelize)
		{
			console.log('Dont connect');
			return 0;
		}
		var bcrypt=global.app.core.crypt;
		bcrypt.genSalt(10, (err, salt) => {
	      bcrypt.hash(password, salt, (err, hash) => {
          	sequelize.query("INSERT INTO user (username, password_hash) VALUES (:login, :password)", { 
					replacements: {login:login,password:hash},
					type: sequelize.QueryTypes.INSERT })
					.then(function(projects) {
						this.id=login;
						cb();
					});
	    	});
        });
		
		
	}
	
}



