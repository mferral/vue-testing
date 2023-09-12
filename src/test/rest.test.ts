function rest(a: number, b: number) {
    return a - b
}

test('adds 3 + 1 to equal 2', () => {
    expect(rest(3, 1)).toBe(2)
})