module.exports=
{
	
	success:0,
	DeleteAll:function(login, callback){
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
		});
		var Task=sequelize.define('task',{},{
			timestamps: false,
			paranoid: true,
			underscored: true,
			freezeTableName: true,
			tableName: 'tasks'
		});
		Table.findAll({
			attributes: ['id'],
			where: 
			{
				username: login
			}
		}).then(tables=>{
			
			if(tables){
				var array_t=tables.map(el => el.get('id'));
				Task.destroy({
					where:{tableId:array_t}
				});
			}
			Table.destroy({
					where: {username:login},
					truncate: true
				}).then(()=>
				{
					callback();		
				});
			
		});			
	},	
}



