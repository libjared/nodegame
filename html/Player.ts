import {Vector, Color, CollisionType, Actor} from "excalibur";
import MyGame from "./MyGame";

abstract class Player extends Actor {
    constructor() {
        super(32, 32, 32, 32);
    }

    public onInitialize(engine: MyGame) {
        this.color = Color.fromHex('#ff0000');
        this.anchor = new Vector(0, 0);
        this.collisionType = CollisionType.Fixed;
    }
}

export default Player;