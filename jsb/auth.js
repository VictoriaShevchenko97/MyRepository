module.exports=
{
	
	exist:0,
	CheckUser:function(login,password, callback){
		var sequelize=global.app.mod['db'];
		if(!sequelize)
		{
			console.log('Dont connect');
			return 0;
		}

		var bcrypt=global.app.core.crypt;
		var User=sequelize.define('user',{},{
			timestamps: false,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			tableName: 'user'
		})
		User.findOne({
			attributes: ['username', 'password_hash'],
			where: 
			{
	    		username: login
	    	}

		}).then(c=>
		{
			if(c){
				
			console.log(bcrypt.compareSync(password, c.dataValues.password_hash));
			
				if(bcrypt.compareSync(password, c.dataValues.password_hash))
				{
					this.exist=login;
					
				}
				else{this.exist=0;}
			}
			else{this.exist=0;}
			callback();
		});
		
	}
}



