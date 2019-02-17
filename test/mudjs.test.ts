import MUD from '../src/mudjs'

/**
 * Dummy test
 */
describe('Dummy test', () => {
    it('works if true is truthy', () => {
        expect(true).toBeTruthy()
    })

    it('DummyClass is instantiable', () => {
        expect(new MUD({} as any)).toBeInstanceOf(MUD)
    })
})
