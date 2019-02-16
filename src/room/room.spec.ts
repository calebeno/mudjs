// @ts-ignore
import uuid from 'uuid'
import { createShellRoom } from './room'

test('first', () => {
    const mockUUID: string = 'abc-123'
    const v4Spy = jest.spyOn(uuid, 'v4').mockReturnValue(mockUUID as any)

    const room = createShellRoom(0, 0)
    expect(room.info().roomID).toBe(mockUUID)
    expect(v4Spy).toHaveBeenCalledTimes(1)
})
