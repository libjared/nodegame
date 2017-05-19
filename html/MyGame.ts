import {Engine} from "excalibur";
import Networker from "./Networker";
import PlayerModel from "../shared/PlayerModel";
import HumanPlayer from "./HumanPlayer";
import NetPlayer from "./NetPlayer";

class MyGame extends Engine {
    private networker: Networker;

    public constructor(networker: Networker) {
        super({
            width: 800,
            height: 600,
            canvasElementId: 'gameSurface'
        });
        this.networker = networker;

        const player = new HumanPlayer();
        this.add(player);

        this.addNetworkerListeners();
    }

    private addNetworkerListeners() {
        this.networker.onNewJoin = (playerModel: PlayerModel) => {
            let newPlayer = new NetPlayer();
            this.add(newPlayer);
        };
    }

}

export default MyGame;