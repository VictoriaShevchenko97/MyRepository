mod={};
var io = app.core.io,
	http=app.core.http,
    server=http.createServer(app),
    io = io.listen(server);
    global.io=io;
/*############
Server to CLIENT
############
io.on('connection', function(socket) {  
    socket.emit('announcements', { message: 'A new user has joined!' });
});*/

io.on('connection', function(socket) { 
    
    console.log('connection start'); 
    
    socket.on('event', function(data) {
    	var auth=require(__dirname+'/auth');
    	var data_user=auth.CheckUser(data.login, data.password,function(){
            console.log(auth.exist);
    		if(auth.exist!=0){
                socket.emit('exist',{message:auth.exist});
            }    
    		else{
    			socket.emit('exist',{message:0});
    		}
    	});
    	
    });
    
    socket.on('register',function(data){
        var reg=require(__dirname+'/register');
        var data_user=reg.CheckUser(data.login, function(){
            if(reg.exist==1){
                socket.emit('exist_r',{message:'Логин занят!'});               
            }
            else{
                reg.Register(data.login, data.password,function(){
                    socket.emit('reg_success',{id:reg.id});
                });             
            }
        });
    });
    socket.on('add_new_table',function(data){
       var add_table=require(__dirname+'/add_table');
        add_table.CheckTable(data.username,data.tableName, function(){
            if(add_table.exist==1){
                console.log('exist');   
                socket.emit('exist_t',{message:'Table already exist!'});               
            }
            else{
               socket.emit('added_table');           
            }
        }); 
    });
    socket.on('delete_all',function(data){
       require(__dirname+'/deleteAllTables').DeleteAll(data.login,function(){
            socket.emit('deleted_all');
       });
    })
});
server.listen(3000);
