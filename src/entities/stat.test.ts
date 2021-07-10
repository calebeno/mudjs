import { MUDStat, MUDStatModPhase, MUDStatModType } from './stat';

describe('Stat Entity', () => {
    test('Create a Stat', () => {
        const testStat = new MUDStat('testStat', 7);

        expect(testStat.name).toBe('testStat');
        expect(testStat.value).toBe(7);
    });

    describe('Adding Normal Phase Modifiers', () => {
        test('Add a +1 Modifier', () => {
            const testStat = new MUDStat('testStat', 1);
            testStat.AddModifier(1, MUDStatModType.add);
            expect(testStat.value).toBe(2);
        });

        test('Add a -1 Modifier', () => {
            const testStat = new MUDStat('testStat', 4);
            testStat.AddModifier(1, MUDStatModType.subtract);
            expect(testStat.value).toBe(3);
        });

        test('Add a *2 Modifier', () => {
            const testStat = new MUDStat('testStat', 4);
            testStat.AddModifier(2, MUDStatModType.multiply);
            expect(testStat.value).toBe(8);
        });

        test('Add a /4 Modifier', () => {
            const testStat = new MUDStat('testStat', 12);
            testStat.AddModifier(3, MUDStatModType.divide);
            expect(testStat.value).toBe(4);
        });
    });

    describe('Adding Phase Modifiers', () => {
        test('*2 Early and +2 on Normal', () => {
            const testStat = new MUDStat('testStat', 10);
            testStat.AddModifier(2, MUDStatModType.multiply, MUDStatModPhase.early);
            testStat.AddModifier(2, MUDStatModType.add, MUDStatModPhase.normal);
            expect(testStat.value).toBe(22);
        });

        test('+2 on Normal and *2 Late ', () => {
            const testStat = new MUDStat('testStat', 10);
            testStat.AddModifier(2, MUDStatModType.add, MUDStatModPhase.normal);
            testStat.AddModifier(2, MUDStatModType.multiply, MUDStatModPhase.late);
            expect(testStat.value).toBe(24);
        });
    });
});
