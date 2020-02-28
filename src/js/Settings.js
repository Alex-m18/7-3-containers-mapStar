class Settings {
  constructor() {
    this.userSettings = new Map();
  }

  setUserSetting(name, value) {
    if (!Settings.defaultSettings.get(name)) throw new Error('Wrong setting name');
    if (!Settings.availableSettings.get(name).includes(value)) throw new Error('Wrong setting value');
    if (Settings.defaultSettings.get(name) === value) this.userSettings.delete(name);
    else this.userSettings.set(name, value);
  }

  get currentSettings() {
    const returningSettings = new Map();
    for (const defaultSetting of Settings.defaultSettings) {
      returningSettings.set(defaultSetting[0], defaultSetting[1]);
    }
    for (const userSetting of this.userSettings) {
      returningSettings.set(userSetting[0], userSetting[1]);
    }
    return returningSettings;
  }
}

Settings.defaultSettings = new Map([
  ['theme', 'dark'],
  ['music', 'trance'],
  ['difficulty', 'easy'],
]);

Settings.availableSettings = new Map([
  ['theme', ['dark', 'light', 'gray']],
  ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
  ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
]);

export default Settings;
