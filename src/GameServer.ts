import PlayerModel from "../shared/PlayerModel";

class ServerPlayerModel implements PlayerModel {
    _PlayerModelBrand: any;
    x: number;
    y: number;
}

class GameServer {
    io: SocketIO.Server;

    constructor(io: SocketIO.Server) {
        this.io = io;
        this.setUpServerListeners();
    }

    private setUpServerListeners() {
        this.io.on('connection', function(socket: SocketIO.Socket) {
            //set up listeners
            this.setUpClientListeners(socket);
            //send welcome wagon
            let plr = new ServerPlayerModel();
            //io.sockets.adapter.rooms
            //socket.rooms

            socket.broadcast.emit('new join', plr);
            //todo: inform him of clients that were there before him... foreach socket in room, etcetc
        });
    }

    private setUpClientListeners(socket: SocketIO.Socket) {

    }
}

export default GameServer;