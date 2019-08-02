it('should do basic math', () => {
  expect(2 + 2).toBe(4);
});

it('should be able to subtract', () => {
  expect(6 - 4).toBe(2);
  expect(9 - 7).toBeLessThan(10);
  expect(8 - 4).not.toBe(7);
})