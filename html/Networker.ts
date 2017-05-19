import Socket = SocketIO.Socket;
import PlayerModel from "../shared/PlayerModel";

class Networker {
    private socket: Socket;
    onNewJoin: (player: PlayerModel) => void;

    public constructor(io: Socket) {
        this.socket = io;
        this.addListeners();
    }

    private addListeners() {
        this.socket.on('new join', (player: PlayerModel) => {
            console.log("Player joined");
            this.onNewJoin(player);
        });
    }
}

export default Networker;