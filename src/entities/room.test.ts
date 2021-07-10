import { v4 } from 'uuid';
import { MUDRoom } from './room';

jest.mock('uuid', () => ({
    v4: jest.fn()
}));
const mockedV4 = v4 as jest.MockedFunction<typeof v4>;

describe('Room Entity', () => {
    afterEach(() => {
        mockedV4.mockReset();
    });

    test.only('Creates a Configured Room', () => {
        const mockUUID = 'abc-123';
        mockedV4.mockReturnValue(mockUUID);

        const room = new MUDRoom(0, 1);
        const roomInfo = room.info;

        const expectedRoomInfo = {
            roomID: mockUUID,
            title: `Room at 0x1`,
            coordinates: `0x1`,
            description: `Room Description at 0x1`
        };

        expect(roomInfo).toStrictEqual(expectedRoomInfo);
    });
});
