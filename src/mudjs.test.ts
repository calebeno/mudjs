import { MUD } from './mudjs';

describe('MUD Main', () => {
    it('MUD is instantiable and logs watermark', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        expect(new MUD({} as any)).toBeInstanceOf(MUD);
        expect(log).toHaveBeenCalledWith(`
 ____________________________________
|    _____ _____ ____     __ _____   |
|   |     |  |  |    \\ __|  |   __|  |
|   | | | |  |  |  |  |  |  |__   |  |
|   |_|_|_|_____|____/|_____|_____|  |
|        ADVENTURE IF YOU DARE!      |
| An API For Building MUD-like Games |
|        by Caleb Eno ©${new Date().getFullYear()}          |
|____________________________________|
`);
        log.mockReset();
    });

    it('MUD should not log watermark', () => {
        const log = jest.spyOn(console, 'log').mockImplementation(() => {});
        const config: any = {
            disableTitleCard: true
        };
        expect(new MUD(config)).toBeInstanceOf(MUD);
        expect(log).not.toHaveBeenCalledWith(`
 ____________________________________
|    _____ _____ ____     __ _____   |
|   |     |  |  |    \\ __|  |   __|  |
|   | | | |  |  |  |  |  |  |__   |  |
|   |_|_|_|_____|____/|_____|_____|  |
|        ADVENTURE IF YOU DARE!      |
| An API For Building MUD-like Games |
|        by Caleb Eno ©${new Date().getFullYear()}          |
|____________________________________|
`);
        log.mockReset();
    });
});
