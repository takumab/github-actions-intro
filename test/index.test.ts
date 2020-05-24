import { sayHello } from '../src';

describe('sayHello', () => {
  test('should return hello', () => {
    expect(sayHello()).toBe('goodbye');
  });
});
