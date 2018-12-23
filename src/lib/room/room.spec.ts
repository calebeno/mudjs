// @ts-ignore
import uuid = require('uuid');
import { createRoom } from './room';

test('first', () => {
    const mockUUID = 'abc-123';
    const v4Spy = jest.spyOn(uuid, 'v4').mockReturnValue(mockUUID);

    const room = createRoom();
    expect(room.roomID).toBe(mockUUID);
    expect(v4Spy).toHaveBeenCalledTimes(1);
});
