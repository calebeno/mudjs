const uuid = require('uuid')
import { createShellRoom } from '../src/room/room'

test('first', () => {
    const mockUUID: string = 'abc-123'
    const v4Spy = jest.spyOn(uuid, 'v4').mockReturnValue(mockUUID as any)

    const room = createShellRoom(0, 0)
    expect(room.info().roomID).toBe(mockUUID)
    expect(v4Spy).toHaveBeenCalledTimes(1)
})
