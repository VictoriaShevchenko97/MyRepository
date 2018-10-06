var io = app.core.io,
	http=app.core.http;

var server=app.listen(3000);
var io = io(server);
/*
############
Server to CLIENT
############
io.on('connection', function(socket) {  
    socket.emit('announcements', { message: 'A new user has joined!' });
});

*/
io.on('connection', function(socket) {  
    socket.on('event', function(data) {
        console.log('A client sent us this dumb message:', data.message);
    });
});