import { Connection } from "./Connection";

describe("Connection", () => {
    it('should exist and be instanciable', () => {
        const conn = new Connection()
        expect(conn).toBeInstanceOf(Connection)
    })
})
