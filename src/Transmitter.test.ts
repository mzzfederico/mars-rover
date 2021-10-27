import { Transmitter } from './Transmitter'
import { MockConnection } from './Connections/Mock'
import { Connection } from './Connections/Connection'
import { Commands } from './CommandsEnum'

describe('Transmitter', () => {
  it('should receive a connection, instance of rover connection', () => {
    const transmitter = new Transmitter(new MockConnection())
  })

  it('should receive a command to go forward', () => {
    const transmitter = new Transmitter(new MockConnection())
    expect(transmitter).toHaveProperty('goForward')
    transmitter.goForward()
  })

  it('should receive a command to go backward', () => {
    const transmitter = new Transmitter(new MockConnection())
    expect(transmitter).toHaveProperty('goBackward')
    transmitter.goBackward()
  })

  it('should receive a command to turn left', () => {
    const transmitter = new Transmitter(new MockConnection())
    expect(transmitter).toHaveProperty('turnLeft')
    transmitter.turnLeft()
  })

  it('should receive a command to turn right', () => {
    const transmitter = new Transmitter(new MockConnection())
    expect(transmitter).toHaveProperty('turnRight')
    transmitter.turnRight()
  })

  it('should save commands when received', () => {
    const transmitter = new Transmitter(new MockConnection())
    transmitter.goForward()
    transmitter.goBackward()
    transmitter.turnRight()
    transmitter.turnLeft()
    const commandsUntilNow: Commands[] = transmitter.logCommands()
    expect(commandsUntilNow).toStrictEqual([
      Commands.GoForward,
      Commands.GoBackward,
      Commands.TurnRight,
      Commands.TurnLeft
    ])
  })

  it('should send current commands on connection passed at instance', () => {
    const mock = new MockConnection()
    const transmitter = new Transmitter(mock)

    transmitter.goForward()
    transmitter.sendCommands()

    expect(mock.__dumpLastCommands()).toStrictEqual([Commands.GoForward])
  })
})
