/* eslint-env jest */
import sailor from '../index';

test('has correct properties', () => {
  expect(sailor).toHaveProperty('icons');
  expect(sailor).toHaveProperty('replace');
});
