import absolute from "../abs";

test('absolute test positive number', () => {
    const result = absolute(1);
    expect(result).toBe(1);
});


test('absolute test negative number', () => {
    const result =absolute(-1);
    expect(result).toBe(1);
})


test('absolute test negative number', () => {
    const result = absolute(0);
    expect(result).toBe(0);
})