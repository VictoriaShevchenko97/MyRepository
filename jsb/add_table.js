module.exports=
{
	
	exist:0,
	CheckTable:function(login,tableName, callback){
		var sequelize=global.app.mod['db'].connection();
		if(!sequelize)
		{
			console.log('Dont connect');
			return 0;
		}

		var Table=sequelize.define('table',{},{
			timestamps: false,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			tableName: 'Tables'
		})
		Table.findOne({
			where: 
			{
	    		username: login,
	    		name:tableName
	    	}

		}).then(c=>
		{
			this.exist=0;
			if(c){
				this.exist=1;
				callback();			
			}
			else{
				sequelize.query("INSERT INTO Tables (username, name) VALUES (:login, :table)", { 
					replacements: {login:login,table:tableName},
					type: sequelize.QueryTypes.INSERT })
					.then(function(projects) {
						callback();
					});
	    		
			}
				
		});
		
	},
	
}



