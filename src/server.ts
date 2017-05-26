import * as socketio from "socket.io";
import * as http from "http";
import GameServer from "./GameServer";

const app = http.createServer();
const io = socketio.listen(app);

const gs = new GameServer(io);

app.listen(80);
console.log("Started server");