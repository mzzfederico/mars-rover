import { Commands } from "../CommandsEnum";
import { Connection } from "./Connection";

export class MockConnection extends Connection {
    private lastCommandsSent: Commands[] = []

    public send(commands: Commands[]) {
        this.lastCommandsSent = commands
    }

    public __dumpLastCommands(): Commands[] {
        return this.lastCommandsSent
    }
}