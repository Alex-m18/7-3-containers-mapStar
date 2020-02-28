import Settings from '../Settings';

test('Should correctly work with Settings', () => {
  expect(Settings.defaultSettings.get('theme')).toBe('dark');
  expect(Settings.defaultSettings.get('music')).toBe('trance');
  expect(Settings.defaultSettings.get('difficulty')).toBe('easy');

  const settings = new Settings();
  expect(() => settings.setUserSetting('nick', 'vasya')).toThrow();
  expect(() => settings.setUserSetting('theme', 'green')).toThrow();
  expect(() => settings.setUserSetting('theme', 'gray')).not.toThrow();
  expect(() => settings.setUserSetting('music', 'off')).not.toThrow();

  const expected = ['gray', 'off', 'easy'];
  expect([...settings.currentSettings.values()]).toEqual(expected);

  expect(() => settings.setUserSetting('music', 'trance')).not.toThrow();
  expect([...settings.userSettings.values()]).toEqual(['gray']);
});
