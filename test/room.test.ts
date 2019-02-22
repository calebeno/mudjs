const uuid = require('uuid')
import { MUDRoom, MUDRoomConfig, MUDRoomStyle } from '../src/room/room'

describe('Room', () => {
    let config: MUDRoomConfig

    beforeEach(() => {
        config = {
            roomStyle: MUDRoomStyle.single
        }
    })

    test('first', () => {
        const mockUUID: string = 'abc-123'
        const v4Spy = jest.spyOn(uuid, 'v4').mockReturnValue(mockUUID as any)

        const room = new MUDRoom(0, 0)
        expect(room.info.id).toBe(mockUUID)
        expect(v4Spy).toHaveBeenCalledTimes(1)
    })
})
