import { Cardinals } from "../Enums/Cardinals";
import { MockRover } from "./Mock";

const mockedRover = new MockRover(0, 1, Cardinals.North)

describe("MockRover", () => {
    it('should have a position and a direction', () => {
        expect(mockedRover.x).toBe(0)
        expect(mockedRover.y).toBe(1)
        expect(mockedRover.direction).toBe(Cardinals.North)
    })
    it('should have a method to receive commands', () => {
        expect(mockedRover).toHaveProperty('executeCommands')
    })
    it('should turn when given commands to turn right or left') {
        mockedRover.turnLeft()
        mockedRover.turnLeft()
        expect(mockedRover.direction).toBe(Cardinals.South)

        mockedRover.turnRight()
        expect(mockedRover.direction).toBe(Cardinals.West)
    }
})