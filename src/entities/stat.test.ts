import { MUDStat } from './stat';
import { MUDStatModPhase, MUDStatModType } from './stat-mod';
import { MUDStatDefinition } from './stat-definition';

describe('Stat Entity', () => {
    const mockStatDefinition: MUDStatDefinition = {
        statID: 'abc',
        displayName: 'Test Stat',
        minValue: 0,
        maxValue: 10000
    };

    test('Create a Stat', () => {
        const testStat = new MUDStat(mockStatDefinition, 7);

        expect(testStat.displayName).toBe('Test Stat');
        expect(testStat.totalValue).toBe(7);
    });

    describe('Adding Normal Phase Modifiers', () => {
        test('Add a +1 Modifier', () => {
            const testStat = new MUDStat(mockStatDefinition, 1);
            testStat.AddModifier(1, MUDStatModType.add);
            expect(testStat.totalValue).toBe(2);
        });

        test('Add a -1 Modifier', () => {
            const testStat = new MUDStat(mockStatDefinition, 4);
            testStat.AddModifier(1, MUDStatModType.subtract);
            expect(testStat.totalValue).toBe(3);
        });

        test('Add a *2 Modifier', () => {
            const testStat = new MUDStat(mockStatDefinition, 4);
            testStat.AddModifier(2, MUDStatModType.multiply);
            expect(testStat.totalValue).toBe(8);
        });

        test('Add a /4 Modifier', () => {
            const testStat = new MUDStat(mockStatDefinition, 12);
            testStat.AddModifier(3, MUDStatModType.divide);
            expect(testStat.totalValue).toBe(4);
        });
    });

    describe('Adding Phase Modifiers', () => {
        test('*2 Early and +2 on Normal', () => {
            const testStat = new MUDStat(mockStatDefinition, 10);
            testStat.AddModifier(2, MUDStatModType.multiply, MUDStatModPhase.early);
            testStat.AddModifier(2, MUDStatModType.add, MUDStatModPhase.normal);
            expect(testStat.totalValue).toBe(22);
        });

        test('+2 on Normal and *2 Late ', () => {
            const testStat = new MUDStat(mockStatDefinition, 10);
            testStat.AddModifier(2, MUDStatModType.add, MUDStatModPhase.normal);
            testStat.AddModifier(2, MUDStatModType.multiply, MUDStatModPhase.late);
            expect(testStat.totalValue).toBe(24);
        });
    });
});
