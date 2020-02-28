import Bowman from '../Bowman';

test('should return Bowman', () => {
  const expected = {
    name: 'vasya',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(new Bowman('vasya')).toMatchObject(expected);
});

test('should throw', () => {
  expect(() => new Bowman('v')).toThrow();
  expect(() => new Bowman('v1234567890')).toThrow();
});

test('should damage', () => {
  const character = new Bowman('vasya');
  character.damage(100);
  expect(character.health).toBe(25);
  character.damage(10);
  expect(character.health).toBe(17.5);
  character.damage(100);
  expect(character.health).toBe(0);
});
