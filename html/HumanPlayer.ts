import {Input, Vector} from "excalibur";
import Player from "./Player";
import MyGame from "./MyGame";

class HumanPlayer extends Player {
    public update(engine: MyGame, delta: number) {
        super.update(engine, delta);

        if (engine.input.keyboard.isHeld(Input.Keys.Up)) {
            this.pos = this.pos.add(new Vector(0, -4));
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Down)) {
            this.pos = this.pos.add(new Vector(0, 4));
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Left)) {
            this.pos = this.pos.add(new Vector(-4, 0));
        }
        if (engine.input.keyboard.isHeld(Input.Keys.Right)) {
            this.pos = this.pos.add(new Vector(4, 0));
        }
    }
}

export default HumanPlayer;