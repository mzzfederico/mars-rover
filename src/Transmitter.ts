/**
 * When created, it receives the link to the rover;
 * can receive a number of commands,
 * and will execute them by emitting them
 * to the rover through the connection
 */

import { Commands } from "./CommandsEnum";
import { Connection } from "./Connections/Connection"

export class Transmitter {
    private connection: Connection
    private savedCommands: Commands[] = []

    constructor(connection) {
        this.connection = connection
    }

    public goForward(): void {
        this.savedCommands.push(Commands.GoForward)
    }

    public goBackward(): void {
        this.savedCommands.push(Commands.GoBackward)
    }

    public turnLeft(): void {
        this.savedCommands.push(Commands.TurnLeft)
    }

    public turnRight(): void {
        this.savedCommands.push(Commands.TurnRight)
    }

    public logCommands(): Commands[] {
        return this.savedCommands
    }

    public sendCommands(): void {

    }
}
