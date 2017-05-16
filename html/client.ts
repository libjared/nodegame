import * as io from 'socket.io-client';
import Person from "../shared/Person";

const socket = io('http://localhost');

socket.on('why dont you say hello', function() {
    const user: Person = { firstName: 'Billy', lastName: 'Bob' };
    socket.emit('give name', user);
});