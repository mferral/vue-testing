// pnpm run test run sum
// pnpm run test run sum - t "agregar"

function sum(a: number, b: number) {
    return a + b
}

describe('sumar', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3)
    })
})

describe('agregar', () => {
    it('adds 2 + 3 to equal 5', () => {
        expect(sum(2, 3)).toBe(5)
    })
})

