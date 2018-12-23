import { createRoom } from './room';

test('first', () => {
    // const config: MUDRoomConfig= {
    //     dummyParam: ''
    // };
    const room = createRoom();
    expect(room.roomID).toBe('');
});
