import beforeTimeout from './';

const sleep = ms =>
  new Promise(resolve => {
    setTimeout(() => resolve, ms);
  });

test('resolves like a true good boy', async () => {
  const res = await beforeTimeout(Promise.resolve('good boy'), 1);
  expect(res).toBe('good boy');
});

test('works with primitives', async () => {
  const res = await beforeTimeout('good boy', 1);
  expect(res).toBe('good boy');
});

test('throws if too slow!', () =>
  expect(beforeTimeout(sleep(1000), 10)).rejects.toBeDefined());
