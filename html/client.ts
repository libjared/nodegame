import * as io from 'socket.io-client';
import Person from "../shared/Person";
import * as ex from 'excalibur'
import {PointerEvent} from "Input/Pointer";

const socket = io('http://localhost');

socket.on('why dont you say hello', function() {
    const user: Person = { firstName: 'Billy', lastName: 'Bob' };
    socket.emit('give name', user);
});

const game = new ex.Engine({
    width: 800,
    height: 600,
    canvasElementId: 'gameSurface'
});

const paddle = new ex.Actor(150, game.getDrawHeight() - 40, 200, 20);
paddle.color = ex.Color.Chartreuse;
paddle.collisionType = ex.CollisionType.Fixed;
game.input.pointers.primary.on('move', function (evt: PointerEvent) {
    paddle.pos.x = evt.x;
});
game.add(paddle);

game.start();