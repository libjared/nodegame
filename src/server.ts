import * as socketio from "socket.io";
import * as http from "http";

const app = http.createServer();
const io = socketio.listen(app);

app.listen(80);

io.on('connection', function (socket) {
    //set up listeners
    socket.on('my other event', function (data) {
        console.log(data);
    });
    //send welcome wagon
    socket.emit('news', { hello: 'world' });
});