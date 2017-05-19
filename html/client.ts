import * as io from 'socket.io-client';
import Networker from "./Networker";
import MyGame from "./MyGame";

const socket = io('http://localhost');

const networker = new Networker(socket);
const game = new MyGame(networker);
game.start();