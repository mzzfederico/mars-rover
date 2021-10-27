import { Commands } from "../CommandsEnum";
import { Cardinals } from "../Enums/Cardinals";

export class MockRover {
    public x: number
    public y: number
    public direction: Cardinals

    constructor(x: number, y: number, initialDirection: Cardinals) {
        this.x = x
        this.y = y
        this.direction = initialDirection
    }

    executeCommands(commands: Commands): void {

    }
}