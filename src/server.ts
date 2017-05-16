import * as socketio from "socket.io";
import * as http from "http";
import Person from "../shared/Person";

const app = http.createServer();
const io = socketio.listen(app);

app.listen(80);

io.on('connection', function(socket: SocketIO.Socket) {
    //set up listeners
    setUpListenersForNewClient(socket);
    //send welcome wagon
    socket.emit('why dont you say hello');
});

function setUpListenersForNewClient(socket: SocketIO.Socket) {
    socket.on('give name', function(person: Person) {
        console.log(`Just met ${person.firstName} ${person.lastName}.`);
    });
}