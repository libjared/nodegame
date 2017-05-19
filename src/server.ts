import * as socketio from "socket.io";
import * as http from "http";
import PlayerModel from "../shared/PlayerModel";

const app = http.createServer();
const io = socketio.listen(app);

app.listen(80);

console.log("Started server");

class ServerPlayerModel implements PlayerModel {
    _PlayerModelBrand: any;
    x: number;
    y: number;
}

io.on('connection', function(socket: SocketIO.Socket) {
    //set up listeners
    setUpListenersForNewClient(socket);
    //send welcome wagon
    let plr = new ServerPlayerModel();

    socket.broadcast.emit('new join', plr);
    //todo: inform him of clients that were there before him... foreach socket in room, etcetc
});

function setUpListenersForNewClient(socket: SocketIO.Socket) {
    // socket.on('give name', function(person: Person) {
    //     console.log(`Just met ${person.firstName} ${person.lastName}.`);
    // });
}