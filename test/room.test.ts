// eslint-disable-next-line @typescript-eslint/no-var-requires
const uuid = require('uuid')
import { MUDRoom, MUDRoomConfig, MUDRoomStyle } from '../src/room/room'

jest.mock('uuid');
const mockedUuid = uuid as jest.Mocked<typeof uuid>;

describe('Room', () => {
    let config: MUDRoomConfig

    beforeEach(() => {
        config = {
            roomStyle: MUDRoomStyle.single
        }
    })

    test('first', () => {
        const mockUUID = 'abc-123';
        mockedUuid.v4.mockReturnValue(mockUUID);

        const room = new MUDRoom(0, 0);
        expect(room.info.roomID).toBe(mockUUID);
        expect(mockedUuid.v4).toHaveBeenCalledTimes(1);
    })
})
