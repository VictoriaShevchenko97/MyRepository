module.exports=
{
	
	table:0,
	getTables:function(login,callback){
		var sequelize=global.app.mod['db'].connection();
		if(!sequelize)
		{
			console.log('Dont connect');
			return 0;
		}

		var bcrypt=global.app.core.crypt;
		var User=sequelize.define('Tables',{},{
			timestamps: false,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			tableName: 'Tables'
		})
		User.count({
			attributes: ['id'],
			where: 
			{
	    		username: login
	    	}

		}).then(c=>
		{
			this.table=0;
			if(c){
				this.table=c;
							
			}
			callback();	
			
		}).catch( error => {
      sequelize.close();
    }).finally(() => sequelize.close());
		
	},
	
}



